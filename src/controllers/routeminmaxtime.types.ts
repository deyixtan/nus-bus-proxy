export interface RouteMinMaxTime {
  DisplayOrder: string;
  Route: string;
  FirstTime: string;
  LastTime: string;
  ScheduleType: string;
  DayType: string;
}

export interface RouteMinMaxTimeResponse {
  RouteMinMaxTimeResult: {
    RouteMinMaxTime: Array<RouteMinMaxTime>;
  };
}
