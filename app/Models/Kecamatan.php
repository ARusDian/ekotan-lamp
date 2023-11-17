<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    use HasFactory;

    protected $table = 'kecamatan';

    protected $fillable = [
        'name',
    ];

    public function desaKelurahan()
    {
        return $this->hasMany(DesaKelurahan::class);
    }

    public function streetLights()
    {
        return $this->hasManyThrough(StreetLight::class, DesaKelurahan::class);
    }
}