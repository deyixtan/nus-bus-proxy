import { Get, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { ServiceDescriptionResponse } from "./servicedescription.types";

@Route("servicedescription")
class ServiceDescriptionController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getServiceDescription(): Promise<ServiceDescriptionResponse> {
    const response = await this.axiosInstance.get("/ServiceDescription");
    return response.data;
  }
}

export default ServiceDescriptionController;
