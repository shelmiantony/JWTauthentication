import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/users`,
  withCredentials: true,
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = (data) => API.post("/logout", data);
export const getProfile = () => API.get("/profile");
