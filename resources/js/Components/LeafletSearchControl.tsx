import { GeoSearchControl, JsonProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/assets/css/leaflet.css';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Props {
  provider: JsonProvider;
}

export default function LeafletSearchControl(props: Props) {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore
    const searchControl = new GeoSearchControl({
      showMarker: false,
      style: 'bar',
      ...props,
    });

    map.addControl(searchControl);
    return () => {
      map.removeControl(searchControl);
    };
  }, [props]);

  return null;
}
