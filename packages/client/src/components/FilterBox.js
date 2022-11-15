import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { v4 as uuid } from "uuid";

const FilterByDate = ({ pickedDate, setPickedDate }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "16px", lg: "20px" },
          fontWeight: 200,
          mr: "12px",
        }}
      >
        Filter from
      </Typography>
      <TextField
        sx={{ width: "170px" }}
        name="date-start"
        type="date"
        value={pickedDate.start}
        onChange={(event) =>
          setPickedDate({ ...pickedDate, start: event.target.value })
        }
      />
      <Typography
        sx={{
          fontSize: { md: "16px", lg: "20px" },
          fontWeight: 200,
          mx: "12px",
        }}
      >
        to
      </Typography>
      <TextField
        sx={{ width: "200px" }}
        name="date-end"
        type="date"
        value={pickedDate.end}
        onChange={(e) => setPickedDate({ ...pickedDate, end: e.target.value })}
      />
    </Box>
  );
};

const FilterByArea = ({ areaCategories, pickedArea, setPickedArea }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "16px", lg: "20px" },
          fontWeight: 200,
          mr: "12px",
        }}
      >
        Filter by
      </Typography>
      <FormControl sx={{ width: "100px" }}>
        <InputLabel>Area</InputLabel>
        <Select
          value={pickedArea}
          label="Area"
          onChange={(e) => setPickedArea(e.target.value)}
        >
          <MenuItem value="">All Areas</MenuItem>
          {areaCategories
            ?.sort(function (a, b) {
              return a - b;
            })
            ?.map((area) => (
              <MenuItem value={area} key={uuid()}>
                {area}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const FilterBySize = ({ sizeCategories, pickedSize, setPickedSize }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ml: "30px",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "16px", lg: "20px" },
          fontWeight: 200,
          mr: "12px",
        }}
      >
        Filter by
      </Typography>
      <FormControl sx={{ width: "100px" }}>
        <InputLabel>Size</InputLabel>
        <Select
          value={pickedSize}
          label="Size"
          onChange={(e) => setPickedSize(e.target.value)}
        >
          <MenuItem value={null}>All Sizes</MenuItem>
          {sizeCategories
            ?.sort(function (a, b) {
              return a - b;
            })
            ?.map((size) => (
              <MenuItem value={size} key={uuid()}>
                {size}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

function priceText(price) {
  return `Rp. ${Number(price).toLocaleString("in", "ID")}`;
}

const minDistance = 10000;

const FilterByPrice = ({ pickedPrice, setPickedPrice }) => {
  const handleChange = (event, newPrice, activeThumb) => {
    if (!Array.isArray(newPrice)) {
      return;
    }

    if (activeThumb === 0) {
      setPickedPrice([
        Math.min(newPrice[0], pickedPrice[1] - minDistance),
        pickedPrice[1],
      ]);
    } else {
      setPickedPrice([
        pickedPrice[0],
        Math.max(newPrice[1], pickedPrice[0] + minDistance),
      ]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mb: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "16px", lg: "20px" },
          fontWeight: 200,
          mr: "26px",
        }}
      >
        Filter by Price
      </Typography>
      <Slider
        sx={{ width: "500px" }}
        getAriaLabel={() => "Minimum distance"}
        value={pickedPrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={priceText}
        disableSwap
        min={0}
        max={200000}
      />
    </Box>
  );
};

const FilterBox = ({
  areaCategories,
  setPickedArea,
  pickedArea,
  sizeCategories,
  setPickedSize,
  pickedSize,
  pickedPrice,
  setPickedPrice,
  pickedDate,
  setPickedDate,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FilterByArea
            areaCategories={areaCategories}
            pickedArea={pickedArea}
            setPickedArea={setPickedArea}
          />
          <FilterBySize
            sizeCategories={sizeCategories}
            pickedSize={pickedSize}
            setPickedSize={setPickedSize}
          />
        </Box>
        <FilterByDate pickedDate={pickedDate} setPickedDate={setPickedDate} />
      </Box>
      <FilterByPrice
        pickedPrice={pickedPrice}
        setPickedPrice={setPickedPrice}
      />
    </Box>
  );
};

export default FilterBox;
