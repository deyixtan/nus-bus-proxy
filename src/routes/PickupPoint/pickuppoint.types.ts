export interface PickUpPoint {
  routeid: number;
  pickupname: string;
  LongName: string;
  ShortName: string;
  busstopcode: string;
  lat: number;
  lng: number;
}

export interface PickUpPointResponse {
  PickUpPointResult: {
    pickuppoint: Array<PickUpPoint>;
  };
}
