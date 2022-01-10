export interface ActiveBus {
  TimeStamp: string;
  ActiveBusCount: string;
  activebus: Array<ActiveBusInfo>;
}

export interface ActiveBusInfo {
  vehplate: string;
  lat: number;
  lng: number;
  speed: number;
  direction: number;
}

export interface ActiveBusResponse {
  ActiveBusResult: {
    ActiveBus: Array<ActiveBus>;
  };
}
