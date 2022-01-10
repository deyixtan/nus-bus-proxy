export interface ServiceDescription {
  Route: string;
  RouteDescription: string;
  RouteLongName: string;
}

export interface ServiceDescriptionResponse {
  ServiceDescriptionResult: {
    ServiceDescription: Array<ServiceDescription>;
  };
}
