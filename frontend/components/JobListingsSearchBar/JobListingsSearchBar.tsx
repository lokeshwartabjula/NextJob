"use client";

import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { JobListingsSearchBarProps } from "@/app/job-listings/types";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("rgb(0, 48, 96)", 0.25),
  "&:hover": {
    backgroundColor: alpha("rgb(0, 48, 96)", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const JobListingsSearchBar: React.FC<JobListingsSearchBarProps> = ({
  searchValue,
  applySearch,
}) => {
  // const [searchValue, setSearchValue] = useState("");

  // function applySearch(event:any) {
  //   console.log(event.target.value);
  //   setSearchValue(event.target.value);
  // }

  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "100%" }}
          value={searchValue}
          onChange={(event) => applySearch(event.target.value)}
        />
      </Search>
    </Toolbar>
  );
};

export default JobListingsSearchBar;
