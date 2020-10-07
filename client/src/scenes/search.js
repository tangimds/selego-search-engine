import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import LoadingButton from "../components/LoadingButton";

const AppDiv = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  background-color: #fff;
  padding: 20px;
`;

const Body = styled.div`
  flex: 1;
  background-color: #eee;
  border: 1px solid #939393;
  padding: 20px;
`;

const Button = styled.button`
  font-family: Helvetica;
  width: 220px;
  border-radius: 30px;
  margin: auto;
  display: block;
  font-size: 16px;
  padding: 8px;
  min-height: 42px;
`;

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e);
  };

  return (
    <AppDiv>
      <Body>
        <SearchBar value={searchValue} placeholder="Search..." search={search} />
        <Grid searchValue={searchValue} />
      </Body>
    </AppDiv>
  );
}

export default Search;
