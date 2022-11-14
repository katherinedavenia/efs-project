import { Navigate, Route, Routes } from "react-router-dom";
import DashboardCommodity from "./pages/DashboardCommodity";
import DashboardAll from "./pages/DashboardAll";
import DashboardLayout from "./components/DashboardLayout";
import DashboardCommodityDetails from "./pages/DashboardCommodityDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardAll />
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
