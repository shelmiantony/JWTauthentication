import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getProfile,
} from "../controllers/userController.js";
import { protect, authorizedRoles } from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getProfile);
router.get("/admin-dashboard", protect, authorizedRoles("admin"), (req, res) => {
  res.json({ message: "Admin dashboard data" });
});

// Mechanic-only route
router.get(
  "/mechanic-dashboard",
  protect,
  authorizedRoles("mechanic"),
  (req, res) => {
    res.json({ message: "Mechanic dashboard data" });
  },
);
export default router;
