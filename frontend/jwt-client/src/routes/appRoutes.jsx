import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "../components/RegisterPage";
import Login from "../components/Login";
import Logout from "../components/Logout";
import ProfilePage from "../components/Profile";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/logout" element={<Logout />}></Route> */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
