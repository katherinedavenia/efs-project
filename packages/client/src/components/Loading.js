import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
      }}
    >
      <CircularProgress size={50} color="success" />
    </Box>
  );
};

export default Loading;
