import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner({ isOpen, color = "#00f6ff" }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
      >
        <CircularProgress sx={{ color: color }} />
      </Backdrop>
    </div>
  );
}
