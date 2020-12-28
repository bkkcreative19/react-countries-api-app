import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalstyles";
import { lightTheme, darkTheme } from "./components/Theme";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [searchedForCountry, setSearchedForCountry] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const fetchCountries = async () => {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

    setCountries(data);
  };

  // const handleSelectChange = () => {};
  const filterCountries = () => {
    const newCountries = countries.filter(
      (country) => country.region === selectValue
    );

    setFilteredCountries(newCountries);
  };

  const searchForCountry = () => {
    const countrySearch = [...countries];
    let filterlist = countrySearch.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });
    setSearchedForCountry(filterlist);
    console.log(filterlist);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    filterCountries();
  }, [selectValue]);
  useEffect(() => {
    searchForCountry();
  }, [searchValue]);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <Switch>
          <Route exact path="/">
            <HomePage
              // handleSelectChange={handleSelectChange}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              countries={
                filteredCountries.length > 0
                  ? filteredCountries
                  : searchValue.length > 0
                  ? searchedForCountry
                  : countries
              }
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Route>
          <Route exact path="/details/:alpha">
            <DetailsPage countries={countries} />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
