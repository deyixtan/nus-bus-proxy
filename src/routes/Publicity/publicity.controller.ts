import { Get, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { PublicityResponse } from "./publicity.types";

@Route("publicity")
class PublicityController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getPublicity(): Promise<PublicityResponse> {
    const response = await this.axiosInstance.get("/publicity");
    return response.data;
  }
}

export default PublicityController;
