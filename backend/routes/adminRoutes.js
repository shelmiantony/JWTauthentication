import express from "express";
import { protect, authorizedRoles } from "../middlewares/auth.js";
import {
  getAllUsers,
  getUsersForManager,
  getMyJobs,
  createServiceRequest,
} from "../controllers/adminControllers.js";

const router = express.Router();
router.get("/all-users", protect, authorizedRoles("admin"), getAllUsers);
router.get(
  "/users",
  protect,
  authorizedRoles("service_manager"),
  getUsersForManager,
);
router.get("/my-jobs", protect, authorizedRoles("mechanic"), getMyJobs);
export default router;
router.post(
  "/service-requests",
  protect,
  authorizedRoles("admin", "service-manager"),
  createServiceRequest,
);
