import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { API_URL } from "../constants/api";
import Commodity from "../components/Commodity";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const DashboardCommodity = () => {
  const [commodityCategories, setCommodityCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/fishery/categories`);
        setCommodityCategories(data?.data?.commodity);
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
    <Box sx={{ p: "50px" }}>
      {loading ? <Loading /> : <Commodity data={commodityCategories} />}
    </Box>
  );
};

export default DashboardCommodity;
