import * as React from "react";

import "./semiDonutChart.css";

import { Grid, Box } from "@mui/material";

function SemiDonutChart() {
  return (
    <>
    <Box className="download">
        <h4>Current Download</h4>
      <ul className="chart-download">
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
      </ul>
      </Box>
    </>
  );
}
export default SemiDonutChart;
