import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box sx={{ pl: { md: "230px", lg: "250px" } }}>
        <Navbar />
        <Box sx={{ minHeight: "100vh", color: "black", pt: "70px" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default DashboardLayout;
