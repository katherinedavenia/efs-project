import { Edit } from "@mui/icons-material";
import { Box, Button, Modal, OutlinedInput, Typography } from "@mui/material";

const EditItemModal = ({
  formik,
  openEditModal,
  setOpenEditModal,
  onClick,
}) => {
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

  return (
    <Modal
      open={openEditModal.isOpen}
      onClose={() => setOpenEditModal({ isOpen: false })}
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
            Edit Item
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
            value={formik.values.editCommodity}
            onChange={formik.handleChange("editCommodity")}
          />
          <OutlinedInput
            fullWidth
            required
            placeholder="Area* (ex: Cirebon, Jawa Barat)"
            value={formik.values.editArea}
            onChange={formik.handleChange("editArea")}
          />
          <OutlinedInput
            fullWidth
            required
            type="number"
            placeholder="Size*"
            value={formik.values.editSize}
            onChange={formik.handleChange("editSize")}
          />
          <OutlinedInput
            fullWidth
            required
            type="number"
            placeholder="Price* (ex: 25000)"
            value={formik.values.editPrice}
            onChange={formik.handleChange("editPrice")}
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
            onClick={onClick}
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

export default EditItemModal;
