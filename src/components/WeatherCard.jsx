import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6 border-t border-white/20 pt-6 bg-linear-to-br from-orange-600/70 to-blue-800/70 backdrop-blur-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-24 h-24"
        />
        <p className="text-6xl font-bold text-yellow-100">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center text-white capitalize text-lg">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center">
          <p className="text-white">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-white">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className="text-center">
          <p className="text-white">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>
        <div className="text-center">
          <p className="text-white">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;