import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';
import styles from './route.module.css';

type Props = {
  gpxUrl: string;
};

export default function RouteMap({ gpxUrl }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.cyclosm.org">CyclOSM</a>',
    }).addTo(map);

    new L.GPX(gpxUrl, {
      async: true,
      polyline_options: {
        color: '#e74c3c',
        weight: 4,
        opacity: 0.8,
      },
      marker_options: {
        startIconUrl: '',
        endIconUrl: '',
        shadowUrl: '',
      },
    })
      .on('loaded', (e: L.LeafletEvent) => {
        map.fitBounds((e.target as L.GPX).getBounds());
      })
      .addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [gpxUrl]);

  return <div ref={mapRef} className={styles.map} />;
}
