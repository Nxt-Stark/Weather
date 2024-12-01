import axios from "axios";

export const fetchLocationSuggestions = async (query) => {
  const API_KEY = "bc2f4b5304974f9a809c62843fec7171"; // Replace with your OpenCage API key
  const BASE_URL = "https://api.opencagedata.com/geocode/v1/json";

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        key: API_KEY,
        limit: 5,
      },
    });

    return response.data.results.map((result) => ({
      name: result.formatted,
      city: result.components.city || result.components.town || "",
      state: result.components.state || "",
      country: result.components.country || "",
      lat: result.geometry?.lat || null, // Include latitude
      lon: result.geometry?.lng || null, // Include longitude
      timezone: result.annotations.timezone?.name || null, // Ensure timezone is included here
    }));
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
    return [];
  }
};



export const fetchWeatherData = async (city, state, country) => {
    const API_KEY = "25b45296de4c41119f814bd5cf99dd6e"; // Replace with your actual API key
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&state=${state}&country=${country}&key=${API_KEY}`;
  
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  