import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({
  setSelectValue,
  selectValue,
  setSearchValue,
  searchValue,
}) => {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  };
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="search-filter container">
      <div className="input-container">
        <i className="fas search-icon fa-search"></i>

        <input
          className="input"
          type="text"
          placeholder="Search for a country"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className="select" style={{ width: "200px" }}>
        <label htmlFor="region">Filter by Region</label>

        <select
          onChange={handleSelectChange}
          value={selectValue}
          name="region"
          id="region"
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
