<?php

use App\Models\Report;
use App\Models\StreetLight;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    private function insertReports()
    {
        $user = User::whereHas(
            'roles', function ($q)
            {
                $q->where('name', 'user');
            })->get();
        $street_lights = StreetLight::all()->pluck('id')->toArray();

        shuffle($street_lights);
        $reported_street_lights = array_slice($street_lights, 0, 10);
        
        print_r($reported_street_lights);

        foreach ($reported_street_lights as $reported_street_light)
        {
            Report::create([
                'user_id' => $user->random()->id,
                'street_light_id' => $reported_street_light,
                'description' => 'Lampu mati',
                'type' => 'OFF',
                'is_solved' => false
            ]);

            $street_light = StreetLight::find($reported_street_light);
            $street_light->status = 'REPORTED';
            $street_light->save();
        }

        shuffle($street_lights);
        $valid_street_lights = array_slice($street_lights, 0, 10);

        foreach ($valid_street_lights as $valid_street_light)
        {
            Report::create([
                'user_id' => $user->random()->id,
                'street_light_id' => $valid_street_light,
                'description' => 'Lampu mati',
                'type' => 'OFF',
                'is_solved' => false
            ]);
            $street_light = StreetLight::find($valid_street_light);
            $street_light->status = 'VALID';
            $street_light->save();
        }
        shuffle($street_lights);
        $on_progress_street_lights = array_slice($street_lights, 0, 10);

        foreach ($on_progress_street_lights as $on_progress_street_light)
        {
            Report::create([
                'user_id' => $user->random()->id,
                'street_light_id' => $on_progress_street_light,
                'description' => 'Lampu mati',
                'type' => 'OFF',
                'is_solved' => false
            ]);
            $street_light = StreetLight::find($on_progress_street_light);
            $street_light->status = 'ONPROCESS';
            $street_light->save();
        }
    }

    public function up(): void
    {
        //
        $this->insertReports();



    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
