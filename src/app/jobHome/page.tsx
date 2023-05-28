"use client";
import { FaPlus } from "react-icons/fa";
import Button from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import SearchBar from "../../../components/SearchBar";
import JobCard from "../../../components/JobCard";

const JobHome = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Button icon={<FaPlus />} onClick={() => console.log("Button Clicked!")}>
        Click Me
      </Button>
      <JobCard onClickApply={() => console.log("Apply Clicked!")} />
    </div>
  );
};

export default JobHome;
