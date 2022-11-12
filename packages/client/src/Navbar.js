import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SetMeal } from "@mui/icons-material";
import PropTypes from "prop-types";

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: "#f5f5f5",
      borderBottom: "2px solid #e8e8e8",
      position: "absolute",
      width: "100%",
      zIndex: 15,
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          px: { sm: "30px", md: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#475266",
              fontSize: { xs: "18px", sm: "22px" },
            }}
          >
            Welcome to your Dashboard
          </Typography>
          <SetMeal
            sx={{
              ml: "7px",
              width: "24px",
              height: "auto",
              color: "#475266",
              rotate: "180deg",
            }}
          />
        </Box>
        <Box onClick={() => window.open("https://docs.reactjs.org/")}>
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: 300,
              color: "#475266",
              fontSize: { xs: "12px", sm: "16px" },
              "&:hover": {
                color: "#000",
              },
            }}
          >
            Powered by React.js
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

Navbar.propTypes = {
  bgImage: PropTypes.string,
};

export default Navbar;
