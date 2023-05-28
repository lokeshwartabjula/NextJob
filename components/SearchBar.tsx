import React, { FC } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  margin-right: 10px;
  outline: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const SearchIcon = styled(FiSearch)`
  color: #333;
  font-size: 20px;
`;

const SearchBar: FC = () => (
  <SearchContainer>
    <SearchInput type="text" placeholder="Enter your search" />
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </SearchContainer>
);

export default SearchBar;
