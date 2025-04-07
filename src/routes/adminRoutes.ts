import express from "express";
import { userController } from "../controllers/adminControllers"
import { authMiddleware, authorizeRole } from "../middlewares/authMiddleware";
import { RoleType } from "../models/RoleSchema";

const router = express.Router();

router.get("/users", authMiddleware, authorizeRole([RoleType.ADMIN]), userController.getAllUsers);
router.put("/:id/role", authMiddleware, authorizeRole([RoleType.ADMIN]), userController.promoteUser);

export default router;
