import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
const Toast = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
export default Toast;
