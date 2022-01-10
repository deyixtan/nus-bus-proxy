export interface ActiveBus {
    TimeStamp: String;
    ActiveBusCount: String;
    activebus: Array<ActiveBusInfo>;
  }
  
  export interface ActiveBusInfo {
    vehplate: String;
    lat: Number;
    lng: Number;
    speed: Number;
    direction: Number;
  }
  
  export interface ActiveBusResponse {
    ActiveBusResult: {
      ActiveBus: Array<ActiveBus>;
    };
  }
  