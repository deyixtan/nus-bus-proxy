import { Get, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { BusStopsResponse } from "./busstops.types";

@Route("busstops")
class BusStopsController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getBusStops(): Promise<BusStopsResponse> {
    const response = await this.axiosInstance.get("/BusStops");
    return response.data;
  }
}

export default BusStopsController;
