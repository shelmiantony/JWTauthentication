import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { logoutUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      logout();
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const initial = user?.username?.trim()?.charAt(0)?.toUpperCase() || "U";

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
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: 4,
            border: "1px solid rgba(148, 163, 184, 0.22)",
            boxShadow: "0 24px 70px rgba(30, 41, 59, 0.12)",
          }}
        >
          <Box
            sx={{
              px: { xs: 3, sm: 5 },
              pt: { xs: 4, sm: 5 },
              pb: 4,
              textAlign: "center",
              background: "linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)",
            }}
          >
            <Avatar
              sx={{
                width: 82,
                height: 82,
                mx: "auto",
                mb: 2,
                bgcolor: "#2563eb",
                color: "white",
                fontSize: "2rem",
                fontWeight: 700,
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.24)",
              }}
            >
              {initial}
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontWeight: 750,
                letterSpacing: "-0.04em",
                color: "#172554",
              }}
            >
              {user?.username || "Your profile"}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Your account details
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 3, sm: 5 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  p: 2.25,
                  borderRadius: 2.5,
                  bgcolor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 700 }}
                >
                  USERNAME
                </Typography>
                <Typography
                  sx={{
                    mt: 0.5,
                    fontWeight: 600,
                    color: "#172554",
                    overflowWrap: "anywhere",
                  }}
                >
                  {user?.username || "Not available"}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2.25,
                  borderRadius: 2.5,
                  bgcolor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 700 }}
                >
                  EMAIL ADDRESS
                </Typography>
                <Typography
                  sx={{
                    mt: 0.5,
                    fontWeight: 600,
                    color: "#172554",
                    overflowWrap: "anywhere",
                  }}
                >
                  {user?.email || "Not available"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Account type
              </Typography>
              <Chip
                label={(user?.role || "customer").replaceAll("_", " ")}
                size="small"
                sx={{
                  px: 0.5,
                  textTransform: "capitalize",
                  fontWeight: 700,
                  color: "#1d4ed8",
                  bgcolor: "#dbeafe",
                }}
              />
            </Box>

            <Button
              onClick={handleLogout}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                mt: 4,
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": { boxShadow: "0 8px 18px rgba(37, 99, 235, 0.22)" },
              }}
            >
              Logout
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfilePage;
