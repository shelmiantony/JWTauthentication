import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000/api/users" });

export const registerUser = (data) => {
  return API.post("/register", data);
};
export const loginUser = (data) => {
  return API.post("/login", data, { withCredentials: true });
};
export const logoutUser = (data) => {
  return API.post("/logout", data);
};
export const getProfile = () => {
  return API.get("/profile");
};
