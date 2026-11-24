import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
const Toast = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar
      open={open}
      severity={severity}
      message={message}
      onClose={onClose}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled"></Alert>
    </Snackbar>
  );
};
export default Toast;
