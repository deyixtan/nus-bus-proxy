export interface CheckPoint {
  longitude: number;
  latitude: number;
  PointID: string;
  routeid: number;
  isbusstop?: boolean;
  busstopcode?: string;
  busstoplongitude?: number;
  busstoplatitude?: number;
}

export interface CheckPointBusStopResult {
  CheckPointBusStopResult: {
    CheckPoint: Array<CheckPoint>;
  };
}
