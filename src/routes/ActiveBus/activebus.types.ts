export interface ActiveBus {
  vehplate: string;
  lat: number;
  lng: number;
  speed: number;
  direction: number;
}

export interface ActiveBusResponse {
  ActiveBusResult: {
    TimeStamp: string;
    ActiveBusCount: string;
    activebus: Array<ActiveBus>;
  };
}
