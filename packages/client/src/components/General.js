import { Box, Button, Typography } from "@mui/material";
import areas from "../assets/areas.png";
import commodities from "../assets/commodities.png";
import categories from "../assets/categories.png";
import records from "../assets/records.png";
import highest from "../assets/highest.png";
import cheapest from "../assets/cheapest.png";

const Banner = () => (
  <Box
    sx={{
      width: "100%",
      position: "relative",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffe99e",
        p: "50px",
        height: "450px",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "34px", lg: "40px" },
          fontWeight: 700,
          color: "#379477",
          lineHeight: 1.2,
          zIndex: 10,
        }}
      >
        Hello Admin!
        <br />
        Let's Grow Together
        <br />
        Building an End-to-End
        <br />
        Aquaculture Solution
        <br />
        with Technology
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: "25px",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: { md: "200px", lg: "250px" },
            backgroundColor: "#379477",
            borderRadius: "30px",
            textTransform: "none",
            p: { md: "10px", lg: "12px" },
            fontSize: { md: "14px", lg: "16px" },
          }}
          onClick={() =>
            window.open(
              "https://issuu.com/efishery_ai/docs/efishery_s_impact_report_2021"
            )
          }
        >
          See Impact Report
        </Button>
        <Button
          variant="contained"
          sx={{
            width: { md: "200px", lg: "250px" },
            backgroundColor: "#4dc7a2",
            color: "darkslategray",
            mt: "14px",
            borderRadius: "30px",
            textTransform: "none",
            p: { md: "10px", lg: "12px" },
            fontSize: { md: "14px", lg: "16px" },
          }}
          onClick={() =>
            window.open(
              "https://issuu.com/efishery_ai/docs/efishery_s_impact_report_2021"
            )
          }
        >
          eFishery Website
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "20px",
          bottom: 0,
          height: "500px",
          width: "fit-content",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://efishery.com/wp-content/uploads/2021/10/img-about-sect-05-01.png"
        />
      </Box>
    </Box>
  </Box>
);

const images = [commodities, categories, records, areas, highest, cheapest];

const General = ({ data }) => {
  return (
    <Box>
      <Banner />
      <Box
        sx={{
          p: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {data.map((item, index) => (
          <Box
            sx={{
              height: "auto",
              width: "85%",
              mb: "8%",
              backgroundColor: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              p: "15px",
              borderRadius: "25px",
            }}
          >
            <img
              src={images[index]}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "22px",
              }}
            />
            <Typography
              sx={{
                mt: "12px",
                fontSize: { md: "18px", lg: "22px" },
                lineHeight: 1.2,
                textAlign: "center",
                px: { md: "20px", lg: "25px" },
              }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ mt: "4px", fontSize: "22px", fontWeight: 600 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default General;
