import React, { useState, useEffect } from "react";

const Context = React.createContext("");

const MyContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [countries, setCoutries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const searchForCountry = () => {
    const countrySearch = [...countries];
    let filterlist = countrySearch.filter((country) => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    setFilteredCountries(filterlist);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);

  return (
    <Context.Provider
      value={{
        countries,
        searchForCountry,
        setSearch,
        search,
        filteredCountries,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
