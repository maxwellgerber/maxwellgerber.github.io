import 'leaflet';

declare module 'leaflet' {
  class GPX extends FeatureGroup {
    constructor(
      url: string,
      options?: {
        async?: boolean;
        polyline_options?: PathOptions;
        marker_options?: {
          startIconUrl?: string;
          endIconUrl?: string;
          shadowUrl?: string;
        };
      }
    );
    getBounds(): LatLngBounds;
  }
}
