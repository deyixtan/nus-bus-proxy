import express from "express";
import ActiveBusController from "./ActiveBus/activebus.controller";

import AnnouncementController from "./Announcements/announcements.controller";
import BusStopsController from "./BusStops/busstops.controller";
import CheckPointBusStopController from "./CheckPointBusStop/checkpointbusstop.controller";
import PickUpPointController from "./PickupPoint/pickuppoint.controller";
import PublicityController from "./Publicity/publicity.controller";
import RouteMinMaxTimeController from "./RouteMinMaxTime/routeminmaxtime.controller";
import ServiceDescriptionController from "./ServiceDescription/servicedescription.controller";
import ShuttleServiceController from "./ShuttleService/shuttleservice.controller";
import TickerTapesController from "./TickerTapes/tickertapes.controller";
import { generateAxiosInstance } from "../helpers/axios";

const router = express.Router();
const axiosInstance = generateAxiosInstance();

router.get("/activebus", async (req, res) => {
  const { route_code } = req.query;
  const activeBusController = new ActiveBusController(axiosInstance);
  const activeBusResponse = await activeBusController.getActiveBus(
    String(route_code)
  );
  return res.send(activeBusResponse);
});

router.get("/announcements", async (_req, res) => {
  const announcementsController = new AnnouncementController(axiosInstance);
  const announcementsResponse =
    await announcementsController.getAnnouncements();
  return res.send(announcementsResponse);
});

router.get("/busstops", async (_req, res) => {
  const busStopsController = new BusStopsController(axiosInstance);
  const busStopsResponse = await busStopsController.getBusStops();
  return res.send(busStopsResponse);
});

router.get("/checkpointbusstop", async (req, res) => {
  const { route_code } = req.query;
  const checkPointBusStopController = new CheckPointBusStopController(
    axiosInstance
  );
  const checkPointBusStopResponse =
    await checkPointBusStopController.getCheckPointBusStop(String(route_code));
  return res.send(checkPointBusStopResponse);
});

router.get("/pickuppoint", async (req, res) => {
  const { route_code } = req.query;
  const pickUpPointController = new PickUpPointController(axiosInstance);
  const pickUpPointResponse = await pickUpPointController.getPickupPoint(
    String(route_code)
  );
  return res.send(pickUpPointResponse);
});

router.get("/publicity", async (_req, res) => {
  const publicityController = new PublicityController(axiosInstance);
  const publicityResponse = await publicityController.getPublicity();
  return res.send(publicityResponse);
});

router.get("/routeminmaxtime", async (req, res) => {
  const { route_code } = req.query;
  const routeMinMaxTimeController = new RouteMinMaxTimeController(
    axiosInstance
  );
  const routeMinMaxTimeResponse =
    await routeMinMaxTimeController.getRouteMinMaxTime(String(route_code));
  return res.send(routeMinMaxTimeResponse);
});

router.get("/servicedescription", async (_req, res) => {
  const serviceDescriptionController = new ServiceDescriptionController(
    axiosInstance
  );
  const serviceDescriptionResponse =
    await serviceDescriptionController.getServiceDescription();
  return res.send(serviceDescriptionResponse);
});

router.get("/shuttleservice", async (req, res) => {
  const { busstopname } = req.query;
  const shuttleServiceController = new ShuttleServiceController(axiosInstance);
  const shuttleServiceResponse =
    await shuttleServiceController.getShuttleService(String(busstopname));
  return res.send(shuttleServiceResponse);
});

router.get("/tickertapes", async (_req, res) => {
  const tickerTapesController = new TickerTapesController(axiosInstance);
  const tickerTapesResponse = await tickerTapesController.getTickerTapes();
  return res.send(tickerTapesResponse);
});

export default router;
