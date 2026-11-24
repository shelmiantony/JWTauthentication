import { useForm } from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/api";
import Toast from "../components/Toast";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      login(res.data);
      setToast({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      window.setTimeout(() => navigate("/profile"), 2200);
    } catch (err) {
      setToast({
        open: true,
        message:
          (typeof err.response?.data === "string"
            ? err.response.data
            : err.response?.data?.message) ||
          "Login failed. Please check your details and try again.",
        severity: "error",
      });
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
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              {...register("password", {
                required: "password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={() => setShowPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
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
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Not registered?{""}
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              sx={{ fontWeight: 600 }}
            >
              Register
            </Link>
          </Typography>
          <Toast
            open={toast.open}
            message={toast.message}
            severity={toast.severity}
            onClose={() => setToast((current) => ({ ...current, open: false }))}
          />
        </Paper>
      </Container>
    </Box>
  );
};
export default Login;
