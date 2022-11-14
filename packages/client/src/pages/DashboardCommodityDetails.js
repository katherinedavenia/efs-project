import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/api";
import CommodityDetails from "../components/CommodityDetails";
import Loading from "../components/Loading";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import moment from "moment";

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
  const [openEditModal, setOpenEditModal] = useState({
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

  const sizeFilter = pickedSize && `&size=${pickedSize}`;
  const areaFilter = area && `&area=${area}`;
  const priceFilter =
    pickedPrice && `&startPrice=${pickedPrice[0]}&endPrice=${pickedPrice[1]}`;
  const dateFilter =
    (pickedDate.start || pickedDate.end) &&
    `&startDate=${moment(pickedDate?.start)}&endDate=${moment(
      pickedDate?.end
    )}`;

  console.log();

  const additionalFilters = [
    sizeFilter,
    areaFilter,
    priceFilter,
    dateFilter,
  ].filter((filter) => !!filter);

  console.log(
    `${API_URL}/fishery/filter?commodity=${currPathname}${additionalFilters
      .join(",")
      .replace(/,/g, "")}`,
    pickedDate
  );

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        currPathname === "ALL COMMODITIES"
          ? `${API_URL}/fishery/filter?${additionalFilters}`
          : `${API_URL}/fishery/filter?commodity=${currPathname}${additionalFilters
              .join(",")
              .replace(/,/g, "")}`
      );
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
  }, [
    pickedSize,
    pickedArea,
    pickedPrice[0],
    pickedPrice[1],
    pickedDate?.start,
    pickedDate?.end,
  ]);

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

  const formik = useFormik({
    initialValues: {
      commodity: "",
      area: "",
      size: null,
      price: null,
      editCommodity: openEditModal.data?.commodity,
      editArea: openEditModal.data?.area,
      editSize: openEditModal.data?.size,
      editPrice: openEditModal.data?.price,
    },
  });

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

  const handleAddItem = async () => {
    try {
      await axios.post(`${API_URL}/fishery`, {
        commodity: formik.values.commodity.toUpperCase(),
        town: formik.values.area?.split(",").slice(-2)[0].toUpperCase(),
        province: formik.values.area?.split(",").slice(-1)[0].toUpperCase(),
        size: formik.values.size,
        price: formik.values.price,
      });
      setOpenAddModal(false);
      toast.success("Item is successfully added!", {
        position: "top-right",
        icon: "🥳",
      });
      fetchData();
      formik.resetForm();
    } catch (error) {
      toast.error("Cannot add item. Try again!", {
        position: "top-right",
        icon: "😵",
      });
    }
  };

  const handleEditItem = async (id) => {
    try {
      setOpenEditModal(false);
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
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          handleEditItem={handleEditItem}
          pickedPrice={pickedPrice}
          setPickedPrice={setPickedPrice}
          openAddModal={openAddModal}
          setOpenAddModal={setOpenAddModal}
          handleAddItem={handleAddItem}
          formik={formik}
          setPickedDate={setPickedDate}
          pickedDate={pickedDate}
        />
      )}
    </Box>
  );
};

export default DashboardCommodityDetails;
