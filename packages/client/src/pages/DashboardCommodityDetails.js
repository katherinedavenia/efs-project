import React, { useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/api";
import CommodityDetails from "../components/CommodityDetails";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import useDebounce from "../hooks/useDebounce";

const DashboardCommodityDetails = () => {
  const location = useLocation();
  const currPathname = location.pathname
    .split("/")
    .slice(-1)[0]
    .replace(/%20/g, " ");

  const [loading, setLoading] = useState(true);

  const [openDeleteModal, setOpenDeleteModal] = useState({
    isOpen: false,
    id: null,
  });
  const [openWriteModal, setOpenWriteModal] = useState({
    isOpen: false,
    data: null,
  });
  const [openAddModal, setOpenAddModal] = useState(false);

  const [commodityData, setCommodityData] = useState(null);
  const [sizeCategories, setSizeCategories] = useState(null);
  const [areaCategories, setAreaCategories] = useState(null);

  const [pickedSize, setPickedSize] = useState(null);
  const [pickedArea, setPickedArea] = useState("");
  const area = pickedArea.split(",").slice(-2)[0];
  const [pickedPrice, setPickedPrice] = useState([0, 200000]);
  const [pickedDate, setPickedDate] = useState({ start: "", end: "" });

  const filters = useMemo(
    () => ({
      size: pickedSize,
      area,
      startPrice: pickedPrice[0] || "",
      endPrice: pickedPrice[1] || "",
      startDate: pickedDate?.start || "",
      endDate: pickedDate?.end || "",
      commodity: currPathname !== "ALL COMMODITIES" ? currPathname : "",
    }),
    [pickedSize, area, pickedPrice, pickedDate, currPathname]
  );

  const debouncedFilters = useDebounce(filters, 500);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/fishery/filter`, {
        params: debouncedFilters,
      });
      setCommodityData(data?.data);
    } catch (e) {
      toast.error(e.message || "Server Error", {
        position: "top-right",
        icon: "😵",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [debouncedFilters]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/fishery/categories`);
        setSizeCategories(data?.data?.size);
        setAreaCategories(data?.data?.area);
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

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/fishery/${id}`);
      setOpenDeleteModal({ isOpen: false });
      toast.success("Item is successfully deleted!", {
        position: "top-right",
        icon: "🥳",
      });
      fetchData();
    } catch (error) {
      toast.error("Cannot delete item. Try again!", {
        position: "top-right",
        icon: "😵",
      });
    }
  };

  const handleAddItem = async (commodity, town, province, size, price) => {
    try {
      await axios.post(`${API_URL}/fishery`, {
        commodity,
        town,
        province,
        size,
        price,
      });
      setOpenAddModal(false);
      toast.success("Item is successfully added!", {
        position: "top-right",
        icon: "🥳",
      });
      fetchData();
    } catch (error) {
      toast.error("Cannot add item. Try again!", {
        position: "top-right",
        icon: "😵",
      });
    }
  };

  const handleEditItem = async (id, commodity, town, province, size, price) => {
    try {
      await axios.put(`${API_URL}/fishery/${id}`, {
        commodity,
        town,
        province,
        size,
        price,
      });
      setOpenWriteModal(false);
      toast.success("Item is successfully updated!", {
        position: "top-right",
        icon: "🥳",
      });
      fetchData();
    } catch (error) {
      toast.error("Cannot edit item. Try again!", {
        position: "top-right",
        icon: "😵",
      });
    }
  };

  return (
    <Box sx={{ p: "50px" }}>
      {loading ? (
        <Loading />
      ) : (
        <CommodityDetails
          data={commodityData}
          currPathname={currPathname}
          sizeCategories={sizeCategories}
          areaCategories={areaCategories}
          setPickedSize={setPickedSize}
          pickedSize={pickedSize}
          setPickedArea={setPickedArea}
          pickedArea={pickedArea}
          handleDeleteItem={handleDeleteItem}
          setOpenDeleteModal={setOpenDeleteModal}
          openDeleteModal={openDeleteModal}
          setOpenWriteModal={setOpenWriteModal}
          openWriteModal={openWriteModal}
          handleEditItem={handleEditItem}
          handleAddItem={handleAddItem}
          pickedPrice={pickedPrice}
          setPickedPrice={setPickedPrice}
          setPickedDate={setPickedDate}
          pickedDate={pickedDate}
        />
      )}
    </Box>
  );
};

export default DashboardCommodityDetails;
