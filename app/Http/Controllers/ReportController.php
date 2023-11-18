<?php

namespace App\Http\Controllers;

use App\Models\DocumentFile;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $reports = Report::with(["streetLight.desaKelurahan.kecamatan", "user"])
            ->whereColumns($request->get('columnFilters'))
            ->latest('id')
            ->paginate($request->get('perPage') ?? 10);
        return inertia('Admin/Report/Index', [
            'reports' => $reports,
        ]);
    }

    public function reportIndex(Request $request)
    {
        $reports = Report::with(["streetLight.desaKelurahan.kecamatan", "user"])
            ->whereColumns($request->get('columnFilters'))
            ->latest('id')
            ->paginate($request->get('perPage') ?? 10);
        return response()->json([
            "status" => "success",
            "data" => $reports
            ]);
    }

    public function getUserReportsApi(Request $request)
    {
        $reports = Report::with(["streetLight.desaKelurahan.kecamatan", "user"])
            ->where("user_id", Auth::user()->id)
            ->latest('id')
            ->paginate($request->get('perPage') ?? 15);
        return response()->json([
            "status" => "success",
            "data" => $reports
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return DB::transaction(function () use ($request)
        {
            $request->validate([
               'description' => 'required',
               'type' => 'required|in:OFF,DIM',
               'street_light_id' => 'required|exists:street_lights,id',
               'images.*.file' => 'image|mimes:jpeg,png,jpg,gif,svg',
               'images.*.description' => 'string|nullable',
            ]);

            $report = Report::create([
                'description' => $request->description,
                'type' => $request->type,
                'street_light_id' => $request->street_light_id,
                'is_solved' => false,
                'user_id' => Auth::user()->id,
            ]);

            $images = $request->file('images');

            if ($images)
            {
                foreach ($images as $image)
                {
                    $img = DocumentFile::createFile(
                        'public',
                        'submission',
                        $image->file,
                    );
                    $report->images()->create([
                        $img->id,
                        'description' => $request->description,
                    ]);
                }
            }

            return response()->json([
                'status' => 'success',
                'data' => $report
                ]);

        });


    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }
}
