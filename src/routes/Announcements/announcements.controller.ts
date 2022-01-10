import { Get, Route } from "tsoa";
import { AxiosInstance } from "axios";

import { AnnouncementsResponse } from "./announcements.types";

@Route("announcements")
class AnnouncementController {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  @Get("/")
  public async getResponse(): Promise<AnnouncementsResponse> {
    const response = await this.axiosInstance.get("/Announcements");

    // fix broken response
    const tmp = JSON.stringify(response.data).replace('\\ "', '\\"');
    const data = JSON.parse(tmp);
    return data;
  }
}

export default AnnouncementController;
