<?php

namespace App\Utils;


class PolygonGenerator
{

    private $points;
    private $distance;

    public function __construct($points, $distance)
    {
        $this->points = $points;
        $this->distance = $distance;
    }

    public function generatePolygon()
    {
        $hull = $this->grahamScan($this->points);
        return $hull;
    }

    public function expandPolygon()
    {
        $expandedPolygon = array();

        foreach ($this->points as $point)
        {
            // Menggeser setiap titik sejauh $distance meter
            $expandedPoint = $this->shiftPoint($point, $this->distance);
            array_push($expandedPolygon, $expandedPoint);
        }

        return $expandedPolygon;
    }

    private function shiftPoint($point, $distance)
    {
        // Menggeser titik sejauh $distance meter
        $x = $point[0] + $distance;
        $y = $point[1] + $distance;
        return array($x, $y);
    }

    private function grahamScan($points)
    {
        $n = count($points);

        // Fungsi untuk membandingkan sudut antara titik
        $compare = function ($a, $b)
        {
            return ($a['theta'] < $b['theta']) ? -1 : 1;
        };

        $yMin = $points[0][1];
        $min = 0;

        for ($i = 1; $i < $n; $i++)
        {
            $y = $points[$i][1];

            if (($y < $yMin) || ($yMin == $y && $points[$i][0] < $points[$min][0]))
            {
                $yMin = $points[$i][1];
                $min = $i;
            }
        }

        $temp = $points[0];
        $points[0] = $points[$min];
        $points[$min] = $temp;

        // Hitung sudut polar terhadap titik awal
        for ($i = 0; $i < $n; $i++)
        {
            $points[$i]['theta'] = atan2($points[$i][1] - $points[0][1], $points[$i][0] - $points[0][0]);

            // Menyesuaikan sudut untuk membuat polygon lebih lebar
            $points[$i]['theta'] += deg2rad(30); // Sesuaikan nilai 10 dengan seberapa lebar yang diinginkan
        }

        // Menggunakan fungsi pembanding yang didefinisikan di dalam metode
        usort($points, $compare);

        $hull = array($points[0], $points[1]);
        $m = 1;

        for ($i = 2; $i < $n; $i++)
        {
            while ($m > 0 && $this->orientation($hull[$m - 1], $hull[$m], $points[$i]) != 2)
            {
                array_pop($hull);
                $m--;
            }
            array_push($hull, $points[$i]);
            $m++;
        }

        return $hull;
    }

    private function orientation($p, $q, $r)
    {
        $val = ($q[1] - $p[1]) * ($r[0] - $q[0]) - ($q[0] - $p[0]) * ($r[1] - $q[1]);

        if ($val == 0)
            return 0;
        return ($val > 0) ? 1 : 2;
    }
}

?>

