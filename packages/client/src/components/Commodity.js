import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OptionContainer = ({ onClick, title }) => (
  <Box
    onClick={onClick}
    sx={{
      cursor: "pointer",
      "&:hover": {
        boxShadow: "none",
        backgroundColor: "gainsboro",
      },
      transition: "200ms",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      mb: "10%",
      width: "90%",
      aspectRatio: "1 !important",
      backgroundColor: "#e3e3e3",
      borderRadius: "20px",
      boxShadow:
        "inset -10px -10px 15px rgba(255, 255, 255, 0.4), inset 10px 10px 15px rgba(70, 70, 70, 0.1);",
    }}
  >
    <img
      src="https://efishery.com/wp-content/uploads/2022/01/mitra-pakan-resmi.png"
      style={{
        height: "130px",
        width: "auto",
        objectFit: "cover",
      }}
    />
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: 500,
        mt: "14px",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  </Box>
);

const Commodity = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      <OptionContainer
        onClick={() => navigate(`/dashboard/commodity/ALL%20COMMODITIES`)}
        title="All Commodities"
      />
      {data?.map((commodityName) => (
        <OptionContainer
          onClick={() => navigate(`/dashboard/commodity/${commodityName}`)}
          title={commodityName}
        />
      ))}
    </Box>
  );
};

export default Commodity;
