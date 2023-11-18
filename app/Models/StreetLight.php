<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreetLight extends Model
{
    use HasFactory;

    protected $fillable = [
        "address",
        "description",
        "latitude",
        "longitude",
        "status",
        "radius",
        "desa_kelurahan_id",
    ];

    protected $allowedFilters = [
        'address',
        'description',
        'latitude',
        'longitude',
        'status',
        "radius",
        'desa_kelurahan.name',
        'desa_kelurahan.kecamatan.name',
    ];

    public function desaKelurahan()
    {
        return $this->belongsTo(DesaKelurahan::class);
    }

    public function scopeWhereColumns($query, $filter)
    {
        if (isset($filter)) {
            foreach (json_decode($filter) as $value) {
                $key = explode('.', $value->id);
                if (!in_array($value->id, $this->allowedFilter)) {
                    continue;
                }
                if (count($key) > 1) {
                    $query->whereHas($key[0], function ($query) use ($value, $key) {
                        return $query->where($key[1], 'like', '%' . $value->value . '%');
                    });
                } else {
                    $query->where($value->id, 'like', '%' . $value->value . '%');
                }

                if (in_array($key, $this->allowedFilter)) {
                    $query->where($key, 'like', '%' . $value . '%');
                }
            }
        }
    }
}
