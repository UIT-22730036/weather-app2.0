import React, { useContext } from "react";

import { WeatherContext } from "../../contexts/weatherContext";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./WeatherCardsContainer.scss";

const WeatherCardsContainer = () => {
  const { weatherData } = useContext(WeatherContext);
  const weatherInfo = [
    {
      title: "PSI",
      data: Math.floor(weatherData?.main.pressure * 0.0145038),
      extra: "Good",
      content: false,
    },
    {
      title: "WIND SPEED",
      data: weatherData?.wind.speed,
      extra: "km/h",
      content: false,
    },
    {
      title: "DENGUE",
      data: null,
      extra: null,
      content: true,
    },
    {
      title: "",
      data: null,
      extra: null,
      content: false,
    },
  ];

  return (
    <div className="weather-cards-container">
      {weatherInfo?.map((item) => (
        <WeatherCard
          key={item.title}
          title={item.title}
          data={item.data}
          extra={item.extra}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default WeatherCardsContainer;
