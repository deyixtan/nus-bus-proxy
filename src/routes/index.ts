import express from "express";

import AnnouncementController from "../controllers/announcements.controllers";
import BusStopsController from "../controllers/busstops.controllers";
import PublicityController from "../controllers/publicity.controllers";
import ServiceDescriptionController from "../controllers/servicedescription.controllers";
import ShuttleServiceController from "../controllers/shuttleservice.controllers";
import TickerTapesController from "../controllers/tickertapes.controllers";
import { generateAxiosInstance } from "../helper/axios";

const router = express.Router();
const axiosInstance = generateAxiosInstance();

router.get("/announcements", async (_req, res) => {
  const announcementsController = new AnnouncementController(axiosInstance);
  const announcementsResponse = await announcementsController.getResponse();
  return res.send(announcementsResponse);
});

router.get("/busstops", async (_req, res) => {
  const busStopsController = new BusStopsController(axiosInstance);
  const busStopsResponse = await busStopsController.getResponse();
  return res.send(busStopsResponse);
});

router.get("/publicity", async (_req, res) => {
  const publicityController = new PublicityController(axiosInstance);
  const publicityResponse = await publicityController.getResponse();
  return res.send(publicityResponse);
});

router.get("/servicedescription", async (_req, res) => {
  const serviceDescriptionController = new ServiceDescriptionController(
    axiosInstance
  );
  const serviceDescriptionResponse =
    await serviceDescriptionController.getResponse();
  return res.send(serviceDescriptionResponse);
});

router.get("/shuttleservice", async (req, res) => {
  const { busstopname } = req.query;
  const shuttleServiceController = new ShuttleServiceController(axiosInstance);
  const shuttleServiceResponse = await shuttleServiceController.getResponse(
    String(busstopname)
  );
  return res.send(shuttleServiceResponse);
});

router.get("/tickertapes", async (_req, res) => {
  const tickerTapesController = new TickerTapesController(axiosInstance);
  const tickerTapesResponse = await tickerTapesController.getResponse();
  return res.send(tickerTapesResponse);
});

export default router;
