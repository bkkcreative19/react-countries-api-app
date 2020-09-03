import React, { useContext } from "react";
import { Context } from "../../context/context";
import Country from "../Country/Country";

const CoutriesList = () => {
  const { countries, filteredCountries, search } = useContext(Context);

  const returnStuff = () => {
    if (search.length > 0) {
      return filteredCountries;
    } else {
      return countries;
    }
  };

  const countriesDOM = returnStuff().map((country) => {
    return <Country key={country.alpha2Code} country={country} />;
  });
  return <section className='countries-container'>{countriesDOM}</section>;
};

export default CoutriesList;
