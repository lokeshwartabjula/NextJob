"use client";

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { categories, data } from "./constants";
import { RegionSelect } from "./regionSelect";
import { ApexOptionsModified } from "./types";
import RenderChart from "./renderChart";

export default function Dashboard() {
  const [options, setOptions] = useState<ApexOptionsModified>({
    chart: { type: "line" },
    title: { text: "Total Job Openings" },
    xaxis: { categories: categories },
    series: data,
    labels: categories,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const handleChange = (
    e: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    let newOptions = { ...options };
    newOptions.chart!.type = e.target.value as "line" | "bar" | "donut" | "pie";
    setOptions(newOptions);
  };

  return (
    <>
      <Grid
        style={{ padding: "10px", width: "100%" }}
        container
        direction="row"
        justifyContent="space-evenly"
        rowSpacing={1}
      >
        <Grid item sm={4} md={3} xs={24}>
          <RegionSelect />
        </Grid>
        <Grid item sm={7} md={8} xs={24}>
          <Select
            style={{ float: "right" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Chart Type"
            label="Chart Type"
            defaultValue={"line"}
            onChange={handleChange}
            autoWidth
          >
            <MenuItem value={"line"}>Line</MenuItem>
            <MenuItem value={"bar"}>Bar</MenuItem>
            <MenuItem value={"donut"}>Donut</MenuItem>
            <MenuItem value={"pie"}>Pie</MenuItem>
          </Select>
          <RenderChart options={options} />
        </Grid>
      </Grid>
    </>
  );
}
