import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SetMeal, WarehouseOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { md: "230px", lg: "250px" },
        height: "100vh",
        backgroundColor: "#dbf3ec",
        position: "fixed",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard")}>
              <ListItemIcon
                sx={{
                  pl: "10px",
                  minWidth: "42px",
                }}
              >
                <WarehouseOutlined />
              </ListItemIcon>
              <ListItemText primary="General" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard/commodity")}>
              <ListItemIcon
                sx={{
                  pl: "10px",
                  minWidth: "42px",
                }}
              >
                <SetMeal />
              </ListItemIcon>
              <ListItemText primary="Commodity" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => window.open("https://efishery.com/en/")}
              >
                <ListItemIcon
                  sx={{
                    pl: "10px",
                    minWidth: "42px",
                  }}
                >
                  <img
                    src="https://farm.efishery.com/static/media/logo-efarm.a066b045.png"
                    style={{ height: "24px", width: "auto" }}
                  />
                </ListItemIcon>
                <ListItemText primary="Home eFishery" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
