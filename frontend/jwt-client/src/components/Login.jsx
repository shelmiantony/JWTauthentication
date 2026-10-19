import { useForm } from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Box,
  Container,
  Paper,
} from "@mui/material";
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
        background:
          'linear-gradient(135deg, #eef2ff 0%, #f8fafc 55%, #e0f2fe 100%)"',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            border: "1px solid rgba(148, 163, 184, 0.22)",
            boxShadow: "0 24px 70px rgba(30, 41, 59, 0.12)",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <Box sx={{ mb: 1, textAlign: "center" }}>
              {" "}
              <Typography
                component="h1"
                variant="h4"
                sx={{
                  fontWeight: 750,
                  letterSpacing: "-0.04em",
                  color: "#172554",
                }}
              >
                Welcome back
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {" "}
                Log in to your account to continue.
              </Typography>
            </Box>

            <TextField
              fullWidth
              type="email"
              label="Email address"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              aria-label="EMail is required"
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 0.5,
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": { boxShadow: "0 8px 18px rgba(37, 99, 235, 0.22)" },
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
export default Login;
