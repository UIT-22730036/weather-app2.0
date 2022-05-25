import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocationProvider } from "./contexts/locationContext";
import { WeatherProvider } from "./contexts/weatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocationProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </LocationProvider>
  </React.StrictMode>
);
