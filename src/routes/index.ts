import express from "express";
import ActiveBusController from "../controllers/activebus.controllers";

import AnnouncementController from "../controllers/announcements.controllers";
import BusStopsController from "../controllers/busstops.controllers";
import CheckPointBusStopController from "../controllers/checkpointbusstop.controllers";
import PickUpPointController from "../controllers/pickuppoint.controllers";
import PublicityController from "../controllers/publicity.controllers";
import RouteMinMaxTimeController from "../controllers/routeminmaxtime.controllers";
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

router.get("/routeminmaxtime", async (req, res) => {
  const { route_code } = req.query;
  const routeMinMaxTimeController = new RouteMinMaxTimeController(axiosInstance);
  const routeMinMaxTimeResponse = await routeMinMaxTimeController.getResponse(
    String(route_code)
  );
  return res.send(routeMinMaxTimeResponse);
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

router.get("/pickuppoint", async (req, res) => {
  const { route_code } = req.query;
  const pickUpPointController = new PickUpPointController(axiosInstance);
  const pickUpPointResponse = await pickUpPointController.getResponse(
    String(route_code)
  );
  return res.send(pickUpPointResponse);
});

router.get("/checkpointbusstop", async (req, res) => {
  const { route_code } = req.query;
  const checkPointBusStopController = new CheckPointBusStopController(
    axiosInstance
  );
  const checkPointBusStopResponse =
    await checkPointBusStopController.getResponse(String(route_code));
  return res.send(checkPointBusStopResponse);
});

router.get("/activebus", async (req, res) => {
  const { route_code } = req.query;
  const activeBusController = new ActiveBusController(axiosInstance);
  const activeBusResponse = await activeBusController.getResponse(
    String(route_code)
  );
  return res.send(activeBusResponse);
});

export default router;
