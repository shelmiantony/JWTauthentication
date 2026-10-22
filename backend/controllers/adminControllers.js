import User from "../models/userModel.js";
import ServiceRequest from "../models/serviceRequestModel.js";
export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json(users);
};
export const getUsersForManager = async (req, res) => {
  try {
    const users = await User.find({
      role: { $ne: "admin" },
    }).select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const createServiceRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.create({
      customer: req.user._id,
      assignedMechanic: req.body.assignedMechanic,
      vehicleName: req.body.vehicleName,
      status: req.body.status,
    });
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const getMyJobs = async (req, res) => {
  const jobs = await ServiceRequest.find()
    .populate("customer", "username email role")
    .populate("assignedMechanic", "username email");
  res.json(jobs);
};
