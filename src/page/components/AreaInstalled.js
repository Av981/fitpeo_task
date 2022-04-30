import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./areaInstalled.css";
import { Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function AreaInstalled() {
  const [Year, setyear] = React.useState("");
  const handleChange = (event) => {
    setyear(event.target.value);
  };
  return (
    <>
    
      <Box className="installedCard">
        <Box className="installedCard_left">
          <Box>
            <h4>Area Installed</h4>
            <small>(+43% )then last year </small>
          </Box>
          <Box id="num">
            <small>-50</small>
          </Box>
        </Box>
        <Box className="installedCard_right">
          <Box id="yearbox">
            <Box sx={{ minWidth: 80 }}>
              <FormControl
                sx={{ m: 0.5, minWidth: 80, backgroundColor: "#D0D0D1" }}
                size="small"
              >
                <InputLabel>year</InputLabel>
                <Select value={Year} onChange={handleChange}>
                  <MenuItem value={2019}>2019</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Typography>
              <CircleOutlinedIcon
                sx={{
                  fontSize: "medium",
                  background: "green",
                  borderRadius: 50,
                  marginRight: 1,
                }}
              />
              Asia
              <CircleOutlinedIcon
                sx={{
                  fontSize: "medium",
                  background: "yellow",
                  borderRadius: 50,
                  marginLeft: 2,
                  marginRight: 1,
                  borderStyle: "none",
                }}
              />
              America
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default AreaInstalled;
