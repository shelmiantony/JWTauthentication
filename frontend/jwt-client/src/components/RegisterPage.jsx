import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/api";
const Registerpage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (data) => {
    console.log("data :", data);
    try {
      const res = await registerUser(data);
      navigate("/login");
      setSubmitted(true);
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
        boxSizing: "border-box",
        px: 2,
        py: 5,
        background:
          "linear-gradient(135deg, #eef2ff 0%, #f8fafc 55%, #e0f2fe 100%)",
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 0, sm: 2 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            border: "1px solid",
            borderColor: "rgba(148, 163, 184, 0.22)",
            boxShadow: "0 24px 70px rgba(30, 41, 59, 0.12)",
          }}
        >
          <Box sx={{ mb: 3.5, textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 750,
                letterSpacing: "-0.04em",
                color: "#172554",
              }}
            >
              Create your account
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {" "}
              Enter your details to get started.
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <TextField
              fullWidth
              label="Username"
              autoComplete="username"
              type="text"
              {...register("username", {
                required: "username is required",
              })}
              error={Boolean(errors.username)}
              helperText={errors.username?.username}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              error={Boolean(!!errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              label="Password"
              autoComplete="new-password"
              type="password"
              {...register("password", {
                required: "Passwoed is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              error={Boolean(!!errors.password)}
              helperText={
                errors.password?.message || "Use at least 8 characters."
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
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
              Create account
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Already registered?{""}
              <Link
                component={RouterLink}
                to="/login"
                underline="hover"
                sx={{ fontWeight: 600 }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
export default Registerpage;
