import React from "react";

import "./WeatherCard.scss";

const WeatherCard = ({ title, data, extra, content }) => {
  return (
    <div className="weather-card">
      {data && extra ? (
        <>
          <span className="weather-card__title">{title}</span>
          <span className="weather-card__data">{data}</span>
          <span className="weather-card__extra">{extra}</span>
        </>
      ) : (
        <>
          <span className="weather-card__title">{title}</span>
          {content ? (
            <span className="weather-card__content"></span>
          ) : (
            <>
              <button className="weather-card__add-btn"></button>
              <span className="weather-card__add-text">Add</span>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
