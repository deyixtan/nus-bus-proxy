import { Get, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { TickerTapesResponse } from "./tickertapes.types";

@Route("tickertapes")
class TickerTapesController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(): Promise<TickerTapesResponse> {
    const response = await this.axiosInstance.get("/TickerTapes");

    // fix broken response
    const tmp = JSON.stringify(response.data).replace('\\ "', '\\"');
    const data = JSON.parse(tmp);
    return data;
  }
}

export default TickerTapesController;
