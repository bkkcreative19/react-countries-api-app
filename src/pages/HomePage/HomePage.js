import React from "react";
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
