import { useForm } from "react-hook-form";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/api";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(AuthContext);
  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      login(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Login</Typography>
      <TextField
        fullWidth
        type="email"
        {...register("email", {
          required: "Email is required",
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        aria-label="EMail is required"
      ></TextField>
      <TextField
        fullWidth
        type="password"
        {...register("password", {
          required: "password is required",
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
export default Login;
