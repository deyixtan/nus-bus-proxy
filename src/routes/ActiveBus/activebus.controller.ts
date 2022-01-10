import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { ActiveBusResponse } from "./activebus.types";

@Route("/activebus")
class ActiveBusController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(
    @Query() route_code: string
  ): Promise<ActiveBusResponse> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/ActiveBus", config);
    return response.data;
  }
}

export default ActiveBusController;
