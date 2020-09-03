import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

const CountryDetail = (props) => {
  const { countries } = useContext(Context);

  const country = countries.find(
    (item) => item.name === props.match.params.name
  );
  console.log(country);

  return (
    <div className='country-detail'>
      <Link className='back' to='/'>
        <i className='fas fa-long-arrow-alt-left'></i>
        <span>Back</span>
      </Link>

      <div className='country-detail-content'>
        <div className='flag'>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className='text-content'>
          <div className='text-content-container'>
            <h1>{country.name}</h1>
            <div className='details'>
              <div className='left'>
                <p>
                  Native Name:<span>{country.nativeName}</span>
                </p>
                <p>
                  Population:<span>{country.population}</span>
                </p>
                <p>
                  Region:<span>{country.region}</span>
                </p>
                <p>
                  Sub Region:<span>{country.subregion}</span>
                </p>
                <p>
                  Capital:<span>{country.capital}</span>
                </p>
              </div>
              <div className='right'>
                <p>
                  Top Level Domain:<span>{country.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:<span>12344213</span>
                </p>
                <p>
                  Languages:<span>Dutch, French, Yay</span>
                </p>
              </div>
            </div>
            <div className='border-countries'>
              <h4>Border Countries:</h4>
              <ul>
                <li>Franch</li>
                <li>Germany</li>
                <li>Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
