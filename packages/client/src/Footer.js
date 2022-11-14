import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#379477",
      borderTop: "2px solid #e8e8e8",
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          px: { sm: "24px", lg: "50px" },
        }}
      >
        <Box onClick={() => window.open("https://docs.steinhq.com/")}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: 300,
              color: "#fff",
              fontSize: "18px",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            API by Stein
          </Typography>
        </Box>
        <Box onClick={() => window.open("https://docs.reactjs.org/")}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: 300,
              color: "#fff",
              fontSize: "18px",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            © Powered by React.js
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
