export interface EtaInfo {
  plate: string;
  px: string;
  ts: string;
  jobid: number;
  eta: number;
  eta_s: number;
}

export interface Shuttle {
  passengers: string;
  name: string;
  _etas: Array<EtaInfo>;
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
