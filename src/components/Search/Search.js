import React, { useContext } from "react";
import { Context } from "../../context/context";

const SearchFilter = () => {
  const { setSearch, search, searchForCountry } = useContext(Context);
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchForCountry();
  };
  return (
    <div className='search-filter'>
      <div className='input-container'>
        <i className='fas search-icon fa-search'></i>
        <input
          className='input'
          type='text'
          placeholder='Search for a country'
          value={search}
          onChange={handleChange}
        />
      </div>

      <div className='select'>
        <label htmlFor='region'>Filter by Region</label>

        <select name='region' id='region'>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
