import React from "react";
import { Box, Button, Divider, TableHead, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ArrowBackIos, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import DeleteItemModal from "./DeleteItemModal";
import FilterBox from "./FilterBox";
import WriteItemModal from "./WriteItemModal";

function createData(commodity, area, size, price, date, id) {
  return { commodity, area, size, price, date, id };
}

const DataTable = ({ data, setOpenDeleteModal, setOpenWriteModal }) => {
  const rows = (data || []).map((item) => {
    return createData(
      item.komoditas || "-",
      item.area_kota || item.area_provinsi
        ? `${item.area_kota && item.area_kota + ", "}${item.area_provinsi}`
        : "-",
      item.size || "-",
      item.price ? `Rp. ${Number(item.price).toLocaleString("in", "ID")}` : "-",
      item.tgl_parsed ? moment(item.tgl_parsed).format("DD MMM YYYY") : "-",
      item.uuid
    );
  });

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          right: 0,
          top: "-40px",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>
          Total Entries: {rows.length}
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#fafafa",
          boxShadow:
            "0px -1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>Commodity</TableCell>
              <TableCell align="left" sx={{ width: "25%" }}>
                Area
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Size
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Price
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Date
              </TableCell>
              <TableCell align="center" sx={{ width: "10%" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" sx={{ width: "20%" }}>
                  {row.commodity}
                </TableCell>
                <TableCell align="left" sx={{ width: "25%" }}>
                  {row.area}
                </TableCell>
                <TableCell align="center" sx={{ width: "15%" }}>
                  {row.size}
                </TableCell>
                <TableCell align="center" sx={{ width: "15%" }}>
                  {row.price}
                </TableCell>
                <TableCell align="center" sx={{ width: "15%" }}>
                  {row.date}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    onClick={() =>
                      setOpenWriteModal({ isOpen: true, data: row })
                    }
                  >
                    <Edit
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          opacity: "0.6",
                        },
                        height: "24px",
                        color: "#4dc7a2",
                        mr: "10px",
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() =>
                      setOpenDeleteModal({ isOpen: true, id: row.id })
                    }
                  >
                    <Delete
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          opacity: "0.6",
                        },
                        height: "24px",
                        color: "#4dc7a2",
                      }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const CommodityDetails = ({
  data,
  currPathname,
  sizeCategories,
  setPickedSize,
  pickedSize,
  areaCategories,
  setPickedArea,
  pickedArea,
  handleDeleteItem,
  setOpenDeleteModal,
  openDeleteModal,
  setOpenWriteModal,
  openWriteModal,
  pickedPrice,
  setPickedPrice,
  handleEditItem,
  handleAddItem,
  pickedDate,
  setPickedDate,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <DeleteItemModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        onClick={() => handleDeleteItem(openDeleteModal.id)}
      />
      <WriteItemModal
        openWriteModal={openWriteModal}
        setOpenWriteModal={setOpenWriteModal}
        onClick={(formik) =>
          openWriteModal.data?.id
            ? handleEditItem(
                openWriteModal.data?.id,
                formik.values.commodity?.toUpperCase(),
                formik.values.area?.split(",").slice(-2)[0].toUpperCase(),
                formik.values.area?.split(",").slice(-1)[0].toUpperCase(),
                formik.values.size,
                formik.values.price
              )
            : handleAddItem(
                formik.values.commodity?.toUpperCase(),
                formik.values.area?.split(",").slice(-2)[0].toUpperCase(),
                formik.values.area?.split(",").slice(-1)[0].toUpperCase(),
                formik.values.size,
                formik.values.price
              )
        }
        data={openWriteModal.data}
        title={openWriteModal.data?.id ? "Edit Item" : "Add New Item"}
      />

      <Box
        onClick={() => navigate("/dashboard/commodity")}
        sx={{
          cursor: "pointer",
          color: "gray",
          "&:hover": {
            color: "#000",
            textDecoration: "underline",
          },
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          width: "fit-content",
        }}
      >
        <ArrowBackIos sx={{ height: "16px" }} />
        <Typography sx={{ fontSize: "18px" }}>Back</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "42px", fontWeight: 500 }}>
          {currPathname}
        </Typography>
        <Button
          onClick={() => setOpenWriteModal({ isOpen: true })}
          variant="contained"
          sx={{ backgroundColor: "#379477" }}
        >
          + Add New Item
        </Button>
      </Box>

      <Divider sx={{ m: "8px 0 50px" }} />

      <FilterBox
        sizeCategories={sizeCategories}
        setPickedSize={setPickedSize}
        pickedSize={pickedSize}
        areaCategories={areaCategories}
        setPickedArea={setPickedArea}
        pickedArea={pickedArea}
        pickedPrice={pickedPrice}
        setPickedPrice={setPickedPrice}
        pickedDate={pickedDate}
        setPickedDate={setPickedDate}
      />

      <DataTable
        data={data}
        setOpenDeleteModal={setOpenDeleteModal}
        setOpenWriteModal={setOpenWriteModal}
      />
    </>
  );
};

export default CommodityDetails;
