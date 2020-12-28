import React from "react";
import Country from "../Country/Country";
import "./CountriesList.css";

const CountriesList = ({ countries }) => {
  return (
    <div className="countries container">
      {countries.map((country) => (
        <Country key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
