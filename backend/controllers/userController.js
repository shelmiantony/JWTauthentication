import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    return res.status(400).send("please fill all fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashPassword, role });
  await newUser.save();
  createToken(res, newUser._id);
  return res.status(201).json({ _id: newUser._id, username: username });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const currentUser = await User.findOne({ email });
  if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
    createToken(res, currentUser._id);
    return res.status(200).json({
      _id: currentUser._id,
      username: currentUser.username,
      email: currentUser.email,
      role: currentUser.role,
    });
  }
  return res.status(400).send("Invalid credentials");
};
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({
    message: "Logged out successfully",
  });
};
const getProfile = async (req, res) => {
  if (req.user) {
    return res.json({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    });
  }
  return res.status(404).send("User not found");
};

export { createUser, loginUser, logoutUser, getProfile };
