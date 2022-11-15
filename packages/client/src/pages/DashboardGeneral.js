import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import General from "../components/General";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { API_URL } from "../constants/api";

const DashboardGeneral = () => {
  const [statisticsData, setStatisticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/fishery/statistics`);
        setStatisticsData(data?.data);
      } catch (e) {
        toast.error(e.message || "Server Error", {
          position: "top-right",
          icon: "😵",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
      {loading ? <Loading /> : <General data={statisticsData} />}
    </Box>
  );
};

export default DashboardGeneral;
