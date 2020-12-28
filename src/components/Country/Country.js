import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country);
  return (
    <Link to={`/details/${country.alpha3Code}`}>
      <div className="country">
        <div className="country-image">
          <img src={country.flag} />
        </div>

        <div className="country-data">
          <h2>{country.name}</h2>
          <p>
            Population:<span>{country.population}</span>
          </p>
          <p>
            Region:<span>{country.region}</span>
          </p>
          <p>
            Capital:<span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
