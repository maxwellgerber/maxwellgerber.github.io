export type BikeRoute = {
  name: string;
  slug: string;
  description: string;
  location: string;
  distanceMiles: number;
  elevationGainFeet: number;
  difficulty?: 'easy' | 'moderate' | 'hard' | 'epic';
  gpxFile: string;
  photos: string[];
  publishDate: string;
};

export const Routes: BikeRoute[] = [
  {
    name: 'Hawk Hill Loop',
    slug: 'hawk-hill',
    description: 'A classic Marin Headlands loop with stunning Golden Gate views.',
    location: 'Marin County, CA',
    distanceMiles: 12.4,
    elevationGainFeet: 1850,
    difficulty: 'moderate',
    gpxFile: '/routes/gpx/hawk-hill.gpx',
    photos: [],
    publishDate: '04/13/2026',
  },
];
