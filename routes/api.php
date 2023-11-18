<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StreetLightController;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request)
{
    return $request->user();
});

Route::get('kecamatan', function (Request $request)
{
    return response()->json([
        'status' => 'success',
        'data' => Kecamatan::all()
        ]);
});

Route::post('login', [AuthController::class, 'getToken'])->name('api.login');

Route::middleware('auth:sanctum')->group(function ()
{
    Route::get('street-light', [StreetLightController::class, 'getStreetLightsApi'])->name('api.street-light');

});
