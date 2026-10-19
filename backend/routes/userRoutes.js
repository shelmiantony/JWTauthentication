import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getProfile,
} from "../controllers/userController.js";
import protect from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getProfile);

export default router;
