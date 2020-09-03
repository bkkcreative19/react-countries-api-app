import React, { useContext } from "react";
import { Context } from "../../context/context";
import CoutriesList from "../../components/CoutriesList/CoutriesList";
import SearchFilter from "../../components/Search/Search";

const HomePage = () => {
  return (
    <div className='home'>
      <SearchFilter />
      <CoutriesList />
    </div>
  );
};

export default HomePage;
