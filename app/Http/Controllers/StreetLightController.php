<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use App\Models\StreetLight;
use App\Utils\DBSCAN;
use App\Utils\PolygonGenerator;
use Illuminate\Http\Request;

class StreetLightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $streetLights = StreetLight::with(['desaKelurahan.kecamatan'])
            ->whereColumns($request->get('columnFilters'))
            ->paginate($request->get('perPage') ?? 10);
        return inertia('Admin/StreetLight/Index', [
            'streetLights' => $streetLights,
        ]);
    }

    public function map(Request $request)
    {
        $kecamatan = Kecamatan::with('desaKelurahan')->get();
        return inertia('Admin/StreetLight/Map', [
            'kecamatan' => $kecamatan
            ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $kecamatan = Kecamatan::with('desaKelurahan')->get();
        return inertia('Admin/StreetLight/Create', [
            'kecamatan' => $kecamatan,
        ]);
    }

    public function getStreetLightsApi(Request $request)
    {
        if ($request->has("desa_kelurahan_id"))
        {
            $streetLights = StreetLight::where("desa_kelurahan_id", $request->get("desa_kelurahan_id"))->get();
            return response()->json([
                "status" => "success",
                "data" => $streetLights
                ]);
        }
        else if ($request->has('kecamatan_id'))
        {
            $kecamatan = Kecamatan::with('streetLights')->findOrFail($request->get('kecamatan_id'));
            return response()->json([
                "status" => "success",
                "data" => $kecamatan->streetLights,
            ]);
        }
        else if ($request->has("address"))
        {
            $streetLights = StreetLight::where("address", 'LIKE', "%{$request->get("address")}%")->get();
            return response()->json([
                "status" => "success",
                "data" => $streetLights
                ]);
        }
        else
        {
            return response()->json([
                "status" => "success",
                "data" => StreetLight::with("desaKelurahan.kecamatan")->get(),
                ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'address' => ['required'],
            'description' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'radius' => ['required'],
            'desa_kelurahan' => ['required'],
            'desa_kelurahan.id' => ['required', 'exists:desa_kelurahan,id'],
        ]);

        $streetLight = StreetLight::create([
            'address' => $request->address,
            'description' => $request->description,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'radius' => $request->radius,
            'status' => "FINE",
            'desa_kelurahan_id' => $request->desa_kelurahan['id'],
        ]);

        return redirect()->route('street-light.index')->banner('Successfully created street light');
    }

    /**
     * Display the specified resource.
     */
    public function show(StreetLight $streetLight)
    {
        //
        $streetLight = StreetLight::with('desaKelurahan.kecamatan')->findOrFail($streetLight->id);
        return inertia('Admin/StreetLight/Show', [
            'streetLight' => $streetLight,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StreetLight $streetLight)
    {
        //
        $streetLight = StreetLight::with(['desaKelurahan.kecamatan'])->findOrFail($streetLight->id);
        return inertia('Admin/StreetLight/Edit', [
            'streetLight' => $streetLight,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StreetLight $streetLight)
    {
        //
        $request->validate([
            'address' => ['required'],
            'description' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'radius' => ['required'],
            'status' => ['required', 'in:REPORTED,VALID,ONPROCESS,FINE'],
            'desa_kelurahan' => ['required'],
            'desa_kelurahan.id' => ['required', 'exists:desa_kelurahan,id'],
        ]);

        if ($request->has('status') && $request->status == 'FINE' && $streetLight->status == 'ONPROCESS')
        {
            $streetLight->reports()->update([
                'is_solved' => true,
            ]);
        }

        $streetLight->update($request->all());

        return redirect()->route('street-light.show', $streetLight->id)->banner('Successfully updated street light');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StreetLight $streetLight)
    {
        //
        $streetLight->delete();

        return redirect()->route('street-light.index', $streetLight->id)->banner(
            'Successfully deleted street light'
        );
    }

    public function DBSCANCluster()
    {
        $StreetLight = StreetLight::all();

        $StreetLight = $StreetLight->map(function ($item, $key)
        {
            return [
                'latitude' => $item->latitude,
                'longitude' => $item->longitude,
            ];
        })->toArray();

        $epsilon = 0.001;

        $minPoints = 4;

        $dbscan = new DBSCAN($StreetLight, $epsilon, $minPoints);

        $data = $dbscan->run();

        $streetLightCluster = [];

        foreach ($data as $cluster)
        {
            $clusterData = [];
            foreach ($cluster as $clusterItem)
            {
                $clusterData[] = [
                     $StreetLight[$clusterItem]['latitude'], $StreetLight[$clusterItem]['longitude']
                ];
            }
            $streetLightCluster[] = $clusterData;
        }


        $alphaValue = 0.1;

        $concaveHullArray = [];

        foreach ($streetLightCluster as $cluster)
        {
            $generator = new PolygonGenerator($cluster, 40);
            $concaveHullArray[] = $generator->generatePolygon();
        }

        $concaveHullArrayFloat = [];

        foreach ($concaveHullArray as $cluster)
        {
            $clusterData = [];
            foreach ($cluster as $clusterItem)
            {
                $clusterData[] = [
                     floatval($clusterItem[0]), floatval($clusterItem[1])
                ];
            }
            $concaveHullArrayFloat[] = $clusterData;
        }

        $geoJson = [
            'type' => 'FeatureCollection',
            'features' => [],
        ];

        foreach ($concaveHullArrayFloat as $cluster)
        {
            $geoJson['features'][] = [
                'type' => 'Feature',
                'properties' => [
                    'stroke' => '#75ffef',
                    'stroke-width' => 2,
                    'stroke-opacity' => 1,
                    'fill' => '#75ffef',
                    'fill-opacity' => 0.5,
                ],
                'geometry' => [
                    'type' => 'Polygon',
                    'coordinates' => [
                        $cluster,
                    ],
                ],
            ];
        }

        return response()->json($geoJson);

    }
}
