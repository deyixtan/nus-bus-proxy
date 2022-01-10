export interface Shuttle {
  passengers: string;
  name: string;
  etas: Array<any>; // type TBC
  nextArrivalTime: string;
  routeid: number;
  busstopcode: string;
  arrivalTime_veh_plate: string;
  arrivalTime: string;
  nextPassengers: string;
  nextArrivalTime_veh_plate: string;
}

export interface ShuttleServiceResponse {
  ShuttleServiceResult: {
    TimeStamp: string;
    hints: Array<string>;
    name: string;
    shuttles: Array<Shuttle>;
    caption: string;
  };
}
