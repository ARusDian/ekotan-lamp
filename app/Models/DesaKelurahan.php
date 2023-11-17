<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesaKelurahan extends Model
{
    use HasFactory;

    protected $table = 'desa_kelurahan';

    protected $fillable = [
        'name',
        'kecamatan_id',
    ];

    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }

    public function streetLights()
    {
        return $this->hasMany(StreetLight::class);
    }
}