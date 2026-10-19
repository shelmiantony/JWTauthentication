import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { logoutUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";
const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleCLick = async () => {
    try {
      await logoutUser(); //backend logout
      logout(); // frontend logout,clears context user

      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
  return (
    <>
      <h2>Welcome Profile page</h2>
      <Button onClick={handleCLick}>Logout</Button>
    </>
  );
};
export default ProfilePage;
