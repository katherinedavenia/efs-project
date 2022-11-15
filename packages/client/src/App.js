import { Navigate, Route, Routes } from "react-router-dom";
import DashboardCommodity from "./pages/DashboardCommodity";
import DashboardLayout from "./components/DashboardLayout";
import DashboardCommodityDetails from "./pages/DashboardCommodityDetails";
import DashboardGeneral from "./pages/DashboardGeneral";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

const ForceDesktopPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>This web can only be opened in desktop.</Typography>
      </Container>
    </Box>
  );
};

function App() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  if (isMobile) {
    return <ForceDesktopPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardGeneral />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/commodity"
        element={
          <DashboardLayout>
            <DashboardCommodity />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/commodity/:commodityName"
        element={
          <DashboardLayout>
            <DashboardCommodityDetails />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App;
