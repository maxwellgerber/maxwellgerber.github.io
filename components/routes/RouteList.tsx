import { Routes } from '@/data/routes';

export default function RouteList() {
  return (
    <ul>
      {Routes.map((route) => (
        <li key={route.slug}>
          <a href={`/routes/${route.slug}`}>{route.name}</a> — {route.location} · {route.distanceMiles} mi ·{' '}
          {route.elevationGainFeet.toLocaleString()} ft
        </li>
      ))}
    </ul>
  );
}
