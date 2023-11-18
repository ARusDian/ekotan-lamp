<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
    "description",
    "type",
    "is_solved",
    "user_id",
    "street_light_id",
    ];

    protected $allowed_filter = [
    "type",
    "streetLight.address",
    "streetLight.status",
    "streetLight.desa_kelurahan.name",
    "streetLight.desa_kelurahan.kecamatan.name"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function streetLight()
    {
        return $this->belongsTo(StreetLight::class);
    }

    public function scopeWhereColumns($query, $filter)
    {
        if (isset($filter))
        {
            foreach (json_decode($filter) as $value)
            {
                $key = explode('.', $value->id);
                if (!in_array($value->id, $this->allowedFilter))
                {
                    continue;
                }
                if (count($key) > 1)
                {
                    $query->whereHas($key[0], function ($query) use ($value, $key)
                    {
                        return $query->where($key[1], 'like', '%' . $value->value . '%');
                    });
                }
                else
                {
                    $query->where($value->id, 'like', '%' . $value->value . '%');
                }

                if (in_array($key, $this->allowedFilter))
                {
                    $query->where($key, 'like', '%' . $value . '%');
                }
            }
        }
    }

}
