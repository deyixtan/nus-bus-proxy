import express from "express";

import AnnouncementController from "../controllers/announcements.controllers";
import PublicityController from "../controllers/publicity.controllers";
import { generateAxiosInstance } from "../helper/axios";

const router = express.Router();
const axiosInstance = generateAxiosInstance();

router.get("/announcements", async (_req, res) => {
  const announcementsController = new AnnouncementController(axiosInstance);
  const announcementsResponse = await announcementsController.getResponse();
  return res.send(announcementsResponse);
});

router.get("/publicity", async (_req, res) => {
  const publicityController = new PublicityController(axiosInstance);
  const publicityResponse = await publicityController.getResponse();
  return res.send(publicityResponse);
});

export default router;
