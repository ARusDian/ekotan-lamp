import { LatLng, LatLngExpression } from 'leaflet';
import React, { useEffect } from 'react';
import { Circle, Marker, useMap } from 'react-leaflet';

interface Props {
  position?: LatLngExpression;
  onChange: (position: LatLng) => void;
  radius?: number;
}

export default function MapAreaSelect(props: Props) {
  const map = useMap();

  useEffect(() => {
    map.once('click', e => {
      props.onChange(e.latlng);
    });
  });

  return (
    <div>{props.position != null && <Marker
      position={props.position} >
      props.radius != null &&  <Circle
        center={props.position}
        fillColor="blue"
        radius={props.radius} />
    </Marker>}</div>
  );
}
