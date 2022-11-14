import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PropTypes from "prop-types";

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: "#fff",
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
            fontWeight={700}
            sx={{
              ml: "12px",
              color: "#038767",
              textTransform: "uppercase",
              fontSize: "16px",
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
            color: "#4CC7A0",
            "&:hover": { opacity: ".7" },
          }}
        />
      </Box>
    </Container>
  </Box>
);

Navbar.propTypes = {
  bgImage: PropTypes.string,
};

export default Navbar;
