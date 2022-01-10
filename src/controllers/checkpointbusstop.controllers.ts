import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { CheckPointBusStopResponse } from "./CheckPointBusStop.types";

@Route("/checkpointbusstop")
class CheckPointBusStopController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(
    @Query() route_code: string
  ): Promise<CheckPointBusStopResponse> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/CheckPointBusStop", config);
    return response.data;
  }
}

export default CheckPointBusStopController;
