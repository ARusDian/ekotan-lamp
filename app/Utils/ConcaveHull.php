<?php

namespace App\Utils;

class ConcaveHull
{
    private $points;
    private $alpha;

    public function __construct($points, $alpha)
    {
        $this->points = $points;
        $this->alpha = $alpha;
    }

    public function calculateConcaveHull()
    {
        $hull = [];

        if (count($this->points) < 3)
        {
            return $hull;
        }

        $sortedPoints = $this->sortPointsByX($this->points);
        $lower = $this->grahamScan($sortedPoints);
        $upper = $this->grahamScan(array_reverse($sortedPoints));
        $hull = array_merge(array_slice($lower, 0, -1), array_slice($upper, 0, -1));

        $alpha = $this->alpha * count($this->points) / count($hull);
        $concaveHull = [];

        for ($i = 0; $i < count($hull); $i++)
        {
            $start = $i;
            $end = ($i + 1) % count($hull);

            $concaveHull[] = $hull[$start];

            foreach ($this->points as $point)
            {
                if (!$this->pointInHull($point, $concaveHull) && $this->euclideanDistance($hull[$start], $point) <= $alpha && $this->euclideanDistance($hull[$end], $point) <= $alpha)
                {
                    $concaveHull[] = $point;
                }
            }

            $concaveHull[] = $hull[$end];
        }

        return $concaveHull;
    }

    private function sortPointsByX($points)
    {
        usort($points, function ($a, $b)
        {
            return $a[0] <=> $b[0];
        });

        return $points;
    }

    private function grahamScan($points)
    {
        $hull = [];

        foreach ($points as $point)
        {
            while (count($hull) >= 2 && $this->angle($hull[count($hull) - 2], $hull[count($hull) - 1], $point) <= 0)
            {
                array_pop($hull);
            }

            $hull[] = $point;
        }

        return $hull;
    }

    private function angle($p1, $p2, $p3)
    {
        $a = $this->euclideanDistance($p1, $p2);
        $b = $this->euclideanDistance($p2, $p3);
        $c = $this->euclideanDistance($p1, $p3);

        return acos(($a * $a + $b * $b - $c * $c) / (2 * $a * $b));
    }

    private function euclideanDistance($p1, $p2)
    {
            return sqrt(pow($p2[0] - $p1[0], 2) + pow($p2[1] - $p1[1], 2));
    }

    private function pointInHull($point, $hull)
    {
        $n = count($hull);
        $inside = false;

        for ($i = 0, $j = $n - 1; $i < $n; $j = $i++)
        {
            if (($hull[$i][1] <= $point[1] && $point[1] < $hull[$j][1] || $hull[$j][1] <= $point[1] && $point[1] < $hull[$i][1]) &&
            ($point[0] < ($hull[$j][0] - $hull[$i][0]) * ($point[1] - $hull[$i][1]) / ($hull[$j][1] - $hull[$i][1]) + $hull[$i][0]))
            {
                $inside = !$inside;
            }
        }

        return $inside;
    }
}


