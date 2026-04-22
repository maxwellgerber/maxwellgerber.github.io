import styles from './route.module.css';

type Props = {
  photos: string[];
  routeName: string;
};

export default function RoutePhotos({ photos, routeName }: Props) {
  if (photos.length === 0) return null;

  return (
    <div className={styles.photos}>
      {photos.map((src, i) => (
        <img key={src} src={src} alt={`${routeName} - photo ${i + 1}`} loading='lazy' />
      ))}
    </div>
  );
}
