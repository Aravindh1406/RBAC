import express from "express";
import { eventController } from "../controllers/eventControllers";
import { authMiddleware, authorizeRole } from "../middlewares/authMiddleware";
import { RoleType } from "../models/RoleSchema";

const router = express.Router();

router.post("/", authMiddleware, authorizeRole([RoleType.ORGANIZER]), eventController.createEvent);
router.get("/", authMiddleware, eventController.getEvents);
router.delete("/:id", authMiddleware, authorizeRole([RoleType.ORGANIZER]), eventController.deleteEvent);

export default router;
