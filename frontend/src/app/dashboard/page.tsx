// Author: Aayush Dakwala
// Banner: B00945308
// Email:  ay383119@dal.ca

"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { categories, data, useChartOptions } from "./constants";
import { RegionSelect } from "./regionSelect";
import { ApexOptionsModified, GraphType } from "./types";
import RenderChart from "./renderChart";
import OverviewTile from "./overviewTile";

export default function Dashboard() {
  const [options, setOptions] = useState<ApexOptionsModified>(
    useChartOptions(categories)
  );

  const [activeTile, setActiveTile] = useState<number>(0);

  const handleChange = (value: string | null) => {
    let newOptions = { ...options };
    newOptions.chart!.type = value as GraphType;
    console.log(newOptions);

    setOptions(newOptions);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, sm: 3, md: 10 }}>
            <Grid xs={12} sm>
              <OverviewTile
                active={activeTile === 0}
                value="$24k"
                onClick={() => setActiveTile(0)}
              />
            </Grid>
            <Grid xs={12} sm>
              <OverviewTile
                active={activeTile === 1}
                value="1.6k"
                onClick={() => setActiveTile(1)}
              />
            </Grid>
            <Grid xs={12} sm>
              <OverviewTile
                active={activeTile === 2}
                value={"75.5"}
                onClick={() => setActiveTile(2)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 4, sm: 3, md: 10 }}>
            <Grid xs={12} lg={8}>
              <Card sx={{ height: "100%" }}>
                <CardHeader title="Sales" />
                <CardContent>
                  <RenderChart options={options} />
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <RegionSelect handleChange={handleChange} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
