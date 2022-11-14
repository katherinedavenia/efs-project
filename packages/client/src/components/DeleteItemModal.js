import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";

const DeleteItemModal = ({ openDeleteModal, setOpenDeleteModal, onClick }) => {
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
      open={openDeleteModal.isOpen}
      onClose={() => setOpenDeleteModal({ isOpen: false })}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <DeleteOutlineOutlined
            sx={{
              width: "30px",
              height: "auto",
              color: "firebrick",
              mr: "10px",
            }}
          />
          <Typography variant="h6" component="h2" sx={{ color: "firebrick" }}>
            Delete Item
          </Typography>
        </Box>
        <Typography sx={{ mt: "10px", fontSize: "20px" }}>
          Are you sure you want to delete this?
        </Typography>
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
            sx={{ mt: "30px", backgroundColor: "firebrick", color: "#fff" }}
          >
            CONFIRM
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteItemModal;
