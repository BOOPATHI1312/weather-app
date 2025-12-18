import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SerachBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");

    if (!API_KEY) {
      setError("API Key is missing. Please check your .env file.");
      setLoading(false);
      return;
    }
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else if (err.response && err.response.status === 401) {
        setError("Invalid API Key. Please check your .env file.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(/5860.gif)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="backdrop-blur-md text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;