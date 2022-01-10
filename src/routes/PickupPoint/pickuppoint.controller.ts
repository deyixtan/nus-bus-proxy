import { Get, Query, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { PickUpPointResponse } from "./pickuppoint.types";

@Route("/pickuppoint")
class PickUpPointController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getPickupPoint(
    @Query() route_code: string
  ): Promise<PickUpPointResponse> {
    const config = { params: { route_code } };
    const response = await this.axiosInstance.get("/PickupPoint", config);
    return response.data;
  }
}

export default PickUpPointController;
