// WeatherCard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = ({ city = "Amritsar" }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "6675a00d15177c734b4af91f72b8157b"; // ← Replace with your OpenWeatherMap API key

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.error(err));
  }, [city]);

  if (!weather) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-80 text-white">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-5xl font-semibold">{Math.round(weather.main.temp)}°C</p>
      <div className="flex justify-between mt-4 text-sm">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>Wind: {weather.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherCard;
