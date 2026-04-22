import { BikeRoute } from '@/data/routes';
import styles from './route.module.css';

type Props = {
  route: BikeRoute;
};

export default function RouteStats({ route }: Props) {
  return (
    <div className={styles.stats}>
      <span className={styles.stat}>{route.location}</span>
      <span className={styles.stat}>{route.distanceMiles} mi</span>
      <span className={styles.stat}>{route.elevationGainFeet.toLocaleString()} ft gain</span>
      {route.difficulty && (
        <span className={`${styles.difficulty} ${styles[route.difficulty]}`}>{route.difficulty}</span>
      )}
    </div>
  );
}
