import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your React dev server
    credentials: true,
  }),
);

// ✅ Add health check route here
app.get("/api/health", (req, res) => {
  res.send("API is running");
});

// ✅ User routes
app.use("/api/users", userRoutes);
//admin routes
app.use("/api/admin", adminRoutes);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  } catch (err) {
    console.error(`error: ${err.message}`);
    process.exit(1);
  }
};

startServer();
