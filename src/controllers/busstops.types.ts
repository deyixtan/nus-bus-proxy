export interface BusStop {
  caption: string;
  name: string;
  LongName: string;
  ShortName: string;
  latitude: number;
  longitude: number;
}

export interface BusStopsResponse {
  BusStopsResult: {
    busstops: Array<BusStop>;
  };
}
