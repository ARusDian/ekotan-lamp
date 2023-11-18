<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportDocument extends Model
{
    use HasFactory;

    protected $fillable = [
    "description",
    "report_id",
    "image_id"
    ];

    public function file(){
        return $this->belongsTo(DocumentFile::class);
    }

    public function report(){
        return $this->belongsTo(Report::class);
    }
}
