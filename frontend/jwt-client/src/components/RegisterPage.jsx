import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";
const Registerpage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data :", data);
    try {
      const res = await registerUser(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Register</Typography>
      <TextField
        fullWidth
        label="User name"
        type="text"
        {...register("username", {
          required: "username is required",
        })}
        error={!!errors.username}
        helperText={errors.username?.username}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        {...register("password", { required: "Passwoed is required" })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};
export default Registerpage;
