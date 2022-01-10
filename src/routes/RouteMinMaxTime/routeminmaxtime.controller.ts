import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { RouteMinMaxTimeResponse } from "./routeminmaxtime.types";

@Route("routeminmaxtime")
class RouteMinMaxTimeController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(
    @Query() route_code: string
  ): Promise<RouteMinMaxTimeResponse> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/RouteMinMaxTime", config);
    return response.data;
  }
}

export default RouteMinMaxTimeController;
