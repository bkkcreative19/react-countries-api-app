import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div className='country-card'>
      <div className='country-image'>
        <Link to={`/details/${country.name}`}>
          <img src={country.flag} alt={country.name} />
        </Link>
      </div>
      <div className='country-content'>
        <h2>{country.name}</h2>

        <div className='info'>
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
    </div>
  );
};

export default Country;
