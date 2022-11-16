import { Edit } from "@mui/icons-material";
import { Box, Button, Modal, OutlinedInput, Typography } from "@mui/material";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WriteItemModal = ({
  data,
  openWriteModal,
  setOpenWriteModal,
  onClick,
  title,
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      commodity: data?.commodity,
      area: data?.area,
      size: data?.size,
      price: data?.price,
    },
  });

  return (
    <Modal
      open={openWriteModal.isOpen}
      onClose={() => setOpenWriteModal({ isOpen: false })}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Edit
            sx={{
              width: "30px",
              height: "auto",
              color: "darkslategray",
              mr: "10px",
            }}
          />
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "darkslategray" }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            mt: "30px",
            "& > :not(style)": { mb: "12px" },
          }}
          noValidate
          autoComplete="off"
        >
          <OutlinedInput
            fullWidth
            required
            placeholder="Commodity*"
            value={formik.values.commodity}
            onChange={formik.handleChange("commodity")}
          />
          <OutlinedInput
            fullWidth
            required
            placeholder="Area* (ex: Cirebon, Jawa Barat)"
            value={formik.values.area}
            onChange={formik.handleChange("area")}
          />
          <OutlinedInput
            fullWidth
            required
            type="number"
            placeholder="Size*"
            value={formik.values.size}
            onChange={formik.handleChange("size")}
          />
          <OutlinedInput
            fullWidth
            required
            type="number"
            placeholder="Price* (ex: 25000)"
            value={formik.values.price}
            onChange={formik.handleChange("price")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            disabled={
              !formik.values.commodity ||
              !formik.values.area ||
              !formik.values.size ||
              !formik.values.price
            }
            onClick={() => {
              onClick(formik);
              setOpenWriteModal({ isOpen: false });
            }}
            variant="contained"
            sx={{ mt: "30px", color: "#fff" }}
          >
            CONFIRM
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default WriteItemModal;
