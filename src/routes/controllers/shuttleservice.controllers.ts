import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { ShuttleServiceResponse } from "./shuttleservice.types";

@Route("shuttleservice")
class ShuttleServiceController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(
    @Query() busstopname: string
  ): Promise<ShuttleServiceResponse> {
    const config = { params: { busstopname } };
    const response = await this.axiosInstance.get("/ShuttleService", config);
    return response.data;
  }
}

export default ShuttleServiceController;
