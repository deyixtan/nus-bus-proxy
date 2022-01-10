import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { PickUpPointResponse } from "./PickUpPoint.types";

@Route("/pickuppoint")
class PickUpPointController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(
    @Query() route_code: string
  ): Promise<PickUpPointResponse> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/PickupPoint", config);
    return response.data;
  }
}

export default PickUpPointController;
