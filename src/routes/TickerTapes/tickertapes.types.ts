export interface TickerTape {
  ID: string;
  Message: string;
  Status: string;
  Priority: string;
  Display_From: string;
  Display_To: string;
  Affected_Service_Ids: string;
  Accident_Latitude: number;
  Accident_Longitude: number;
  Created_On: string;
  Created_By: string;
}

export interface TickerTapesResponse {
  TickerTapesResult: {
    TimeStamp: string;
    TickerTape: Array<TickerTape>;
  };
}
