<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use App\Models\StreetLight;
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
            'status' => ['required', 'in:BRIGHT,DIM,OFF'],
            'desa_kelurahan' => ['required'],
            'desa_kelurahan.id' => ['required', 'exists:desa_kelurahan,id'],
        ]);

        $streetLight = StreetLight::create([
            'address' => $request->address,
            'description' => $request->description,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'radius' => $request->radius,
            'status' => $request->status,
            'desa_kelurahan_id' => $request->desaKelurahan['id'],
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
            'status' => ['required', 'in:BRIGHT,DIM,OFF'],
            'desa_kelurahan' => ['required'],
            'desa_kelurahan.id' => ['required', 'exists:desa_kelurahan,id'],
        ]);

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
}