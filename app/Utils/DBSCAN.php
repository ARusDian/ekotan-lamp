<?php
namespace App\Utils;

class DBSCAN
{
    private $data;
    private $eps;
    private $minPts;

    public function __construct($data, $eps, $minPts)
    {
        $this->data = $data;
        $this->eps = $eps;
        $this->minPts = $minPts;
    }

    public function run()
    {
        $clusters = [];
        $visited = [];
        $n = count($this->data);

        for ($i = 0; $i < $n; $i++)
        {
            if (!isset($visited[$i]))
            {
                $visited[$i] = true;
                $neighbors = $this->getNeighbors($i);

                if (count($neighbors) >= $this->minPts)
                {
                    $cluster = [$i];
                    $cluster = $this->expandCluster($i, $neighbors, $cluster, $visited);

                    $clusters[] = $cluster;
                }
            }
        }

        return $clusters;
    }

    private function expandCluster($pointIndex, $neighbors, $cluster, &$visited)
    {
        foreach ($neighbors as $neighborIndex)
        {
            if (!isset($visited[$neighborIndex]))
            {
                $visited[$neighborIndex] = true;
                $newNeighbors = $this->getNeighbors($neighborIndex);

                if (count($newNeighbors) >= $this->minPts)
                {
                    $cluster[] = $neighborIndex;
                    $cluster = $this->expandCluster($neighborIndex, $newNeighbors, $cluster, $visited);
                }
            }
        }

        return $cluster;
    }

    private function getNeighbors($pointIndex)
    {
        $neighbors = [];

        foreach ($this->data as $index => $point)
        {
            if ($this->calculateDistance($this->data[$pointIndex], $point) <= $this->eps)
            {
                $neighbors[] = $index;
            }
        }

        return $neighbors;
    }

    private function calculateDistance($point1, $point2)
    {
        $sum = 0;

        foreach ($point1 as $dimension => $value)
        {
            $sum += pow($point1[$dimension] - $point2[$dimension], 2);
        }

        return sqrt($sum);
    }
}
