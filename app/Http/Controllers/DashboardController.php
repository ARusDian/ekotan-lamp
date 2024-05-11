<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use Inertia\Inertia;
use App\Models\StreetLight;

class DashboardController extends Controller
{
    //
    public function index()
    {

        $streetLight = StreetLight::get();
        $streetLightReported = $streetLight->where('status', 'REPORTED')->count();
        $streetLightValid = $streetLight->where('status', 'VALID')->count();
        $streetLightOnProcess = $streetLight->where('status', 'ONPROCESS')->count();
        $streetLightFine = $streetLight->where('status', 'FINE')->count();
        $streetLightByKecamatan = StreetLight::with('desaKelurahan')->get()->groupBy('desaKelurahan.kecamatan.name');
        foreach ($streetLightByKecamatan as $key => $value) {
            $streetLightByKecamatan[$key] = $value->count();
        }
        $kecamatan = Kecamatan::with('desaKelurahan')->get();
        
        return Inertia::render('Admin/Dashboard', [
            'streetLightReported' => $streetLightReported,
            'streetLightOnProcess' => $streetLightOnProcess,
            'streetLightValid' => $streetLightValid,
            'streetLightFine' => $streetLightFine,
            'streetLightByKecamatan' => $streetLightByKecamatan,
            'kecamatan' => $kecamatan
        ]);
    }
}
