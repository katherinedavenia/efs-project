import React from "react";
import { Box, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PropTypes from "prop-types";

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: "#fff",
      borderBottom: "2px solid #e8e8e8",
      position: "fixed",
      width: { md: "calc(100vw - 230px)", lg: "calc(100vw - 250px)" },
      zIndex: 30,
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
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
        <img
          src="https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png"
          style={{ objectFit: "contain", height: "34px", width: "auto" }}
        />
        <Typography
          fontWeight={600}
          sx={{
            ml: "12px",
            color: "#038767",
            textTransform: "uppercase",
            fontSize: "16px",
            transform: "translateY(1px)",
          }}
        >
          Dashboard
        </Typography>
      </Box>
      <AccountCircle
        sx={{
          cursor: "pointer",
          height: "34px",
          width: "auto",
          color: "#379477",
          "&:hover": { opacity: ".7" },
        }}
      />
    </Box>
  </Box>
);

Navbar.propTypes = {
  bgImage: PropTypes.string,
};

export default Navbar;
