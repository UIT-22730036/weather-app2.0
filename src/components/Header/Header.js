import React, { useContext } from "react";

import { cityData } from "../../datas/cityData";

import { LocationContext } from "../../contexts/locationContext";

import "./Header.scss";

const Header = ({ cityName }) => {
  const { setCity } = useContext(LocationContext);
  const changeCityHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="header">
      <span className="header__bars">
        <i className="fa fa-bars"></i>
      </span>
      <div className="header__select-group">
        <span>myENV</span>
        <select id="city-name" name="city-name" onChange={changeCityHandler}>
          {cityData.map((city) => (
            <option value={city.value} key={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <span className="header__bell">
        <i className="fa fa-bell"></i>
      </span>
    </div>
  );
};

export default Header;
