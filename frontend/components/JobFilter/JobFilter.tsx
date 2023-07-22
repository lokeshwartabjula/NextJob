import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Box,
} from "@mui/material";

// Define the filter options here.
enum FilterTypes {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  FREELANCE = "Freelance",
  INTERNSHIP = "Internship",
}

type FilterState = {
  [key in FilterTypes]: boolean;
};

type FilterChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Filter: React.FC = () => {
  // Initialize all filters as unchecked.
  const [checked, setChecked] = useState<FilterState>(
    Object.values(FilterTypes).reduce(
      (acc, filter) => ({ ...acc, [filter]: false }),
      {} as FilterState
    )
  );

  const handleCheckChange = (event: FilterChangeEvent) => {
    // Update the state when a checkbox is toggled.
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  // This effect runs when the checked state changes, and could for example fetch new data.
  useEffect(() => {
    const activeFilters = Object.values(FilterTypes).filter(
      (filter) => checked[filter]
    );
    console.log("Active filters:", activeFilters);
    // Here you could make an API request or some other side-effect with the active filters.
  }, [checked]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h3>Job Filters</h3>
        <Grid container spacing={3}>
          {Object.values(FilterTypes).map((filter) => (
            <Grid item xs={12} key={filter}>
              <Box display="flex" justifyContent="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked[filter] || false}
                      onChange={handleCheckChange}
                      name={filter}
                      color="primary"
                    />
                  }
                  label={filter}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Filter;
