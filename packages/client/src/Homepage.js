import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ height: "100vh" }}>
        <Container maxWidth="lg">
          <Box>s</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
