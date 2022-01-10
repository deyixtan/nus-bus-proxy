export interface CheckPointBusStop {
    longitude: Number;
    latitude: Number;
    PointID: Number;
    routeid: Number;
    isbusstop?: Boolean;
    busstopcode?: String;
    busstoplongitude?: Number;
    busstoplatitude?: Number;
  }
  
  export interface CheckPointBusStopResponse {
    CheckPointBusStopResult: {
      CheckPointBusStop: Array<CheckPointBusStop>;
    };
  }
  