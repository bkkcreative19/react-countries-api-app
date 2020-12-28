import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountriesList from "../../components/CountriesList/CountriesList";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import "./HomePage.css";

const HomePage = ({
  countries,
  // handleSelectChange,
  selectValue,
  setSelectValue,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="home">
      <SearchFilter
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        // handleSelectChange={handleSelectChange}
      />
      <CountriesList countries={countries} />
      {/* {countries.map((country) => (
        <Link to={`/details/${country.alpha3Code}`}>
          <h1>{country.name}</h1>
        </Link>
      ))} */}
    </div>
  );
};

export default HomePage;
