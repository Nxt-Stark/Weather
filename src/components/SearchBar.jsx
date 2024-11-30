import React, { useState, useEffect } from "react";
import { fetchLocationSuggestions, fetchWeatherData } from "../services/GetApi";
import WeatherCard from "./WeatherCard";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    city: "Vishakapattanam",
    state: "Tamil Nadu",
    country: "India",
  });
  const [weather, setWeather] = useState(null);

  const handleInputChange = async (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.length > 2) {
      const results = await fetchLocationSuggestions(userInput);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setSelectedLocation({
      city: suggestion.city || suggestion.name,
      state: suggestion.state,
      country: suggestion.country,
    });
    setQuery("");
    setSuggestions([]);
  };

  // Fetch weather whenever selectedLocation changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { city, state, country } = selectedLocation;
        const weatherData = await fetchWeatherData(city, state, country);
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [selectedLocation]);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4 my-4 xl:my-0">
      <div className="text-center text-white">
        <h1 className="font-bold text-3xl">{selectedLocation.city}</h1>
        <p className="font-semibold">
          {selectedLocation.state}, {selectedLocation.country},
        </p>
      </div>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter Location"
          className="py-4 pl-7 pr-14 rounded-full w-full focus:outline-none backdrop-blur bg-white/50 placeholder-yellow font-semibold"
        />
        <button className="absolute right-2 top-1.5 rounded-full bg-yellow-500 p-2">
          <img
            className="h-7 w-7 text-white"
            src="https://i.ibb.co/1m0B1Cq/Search-01-1.png"
            alt="Search-01"
            border="0"
          />
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute mt-2 bg-white/50 backdrop-blur w-full rounded-xl z-10 p-2 font-semibold">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
 const temp = weather.data[0].app_temp;
}

export default SearchBar;
