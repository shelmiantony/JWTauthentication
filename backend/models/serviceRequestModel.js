import mongoose from "mongoose";
const serviceRequestSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assignedMechanic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vehicleName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "assigned", "in-progress", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Job", serviceRequestSchema);
