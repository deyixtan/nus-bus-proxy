import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { CheckPointBusStopResult } from "./checkpointbusstop.types";

@Route("/checkpointbusstop")
class CheckPointBusStopController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getCheckPointBusStop(
    @Query() route_code: string
  ): Promise<CheckPointBusStopResult> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/CheckPointBusStop", config);
    return response.data;
  }
}

export default CheckPointBusStopController;
