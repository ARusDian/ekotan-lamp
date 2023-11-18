<?php

namespace App\Utils;

class PolygonGenerator
{
    private $points;

    public function __construct($points)
    {
        $this->points = $this->sortPoints($points);
    }

    private function sortPoints($points)
    {
        // Fungsi untuk mengurutkan koordinat berdasarkan sumbu x
        usort($points, function ($a, $b)
        {
            return $a[0] <=> $b[0];
        });

        return $points;
    }

    public function generatePolygon($distance, $rotationAngle)
    {
        $rotatedPolygon = [];

        // Perulangan untuk setiap titik pada polygon
        foreach ($this->points as $point)
        {
            // Pemindahan titik ke arah yang ditentukan dengan jarak yang ditentukan
            $rotatedPoint = $this->rotatePoint($point, $rotationAngle);

            // Tambahkan titik yang telah diputar ke dalam polygon
            $rotatedPolygon[] = $rotatedPoint;
        }

        return $rotatedPolygon;
    }

    private function rotatePoint($point, $angle)
    {
        // Rumus rotasi matriks untuk rotasi searah jarum jam
        $rotatedX = cos($angle) * $point[0] - sin($angle) * $point[1];
        $rotatedY = sin($angle) * $point[0] + cos($angle) * $point[1];

        return [0 => $rotatedX, 1 => $rotatedY];
    }
}



?>

