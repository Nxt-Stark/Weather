import React, { useContext, useRef, useState, useEffect } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { fetchLocationSuggestions, fetchWeatherData } from "../services/GetApi";

function WeatherCard({ setSelectedLocation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const sunWithCloud = "https://i.ibb.co/ZfnT78Z/image-5.png";

  const [weather, setWeather] = useState(null);
  const defaultLocation = {
    city: "Tirur",
    state: "Kerala",
    country: "India",
  };
  const forecastData = [
    { date: "01-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "02-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "03-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "04-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "05-12-2024", temp: "30°C", icon: sunWithCloud },
  ];
  const locationFetch = useSelector((state) => state.location);
  const location = localStorage.getItem("location") || location || defaultLocation;
  useEffect(() => {
    const fetchWeather = async () => {
        try {
            const { city, state, country } = location;
            if (city && state && country) {
                const weather = await fetchWeatherData(city, state, country);
                setWeather(weather);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setWeather(null);
        }
    };

    fetchWeather();
}, [location]);


  const containerRef = useRef(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(false);
  const [isScrolledRight, setIsScrolledRight] = useState(true);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 100;
      if (direction === "right") {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const updateArrows = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrolledLeft(scrollLeft > 0);
      setIsScrolledRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-start">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center h-auto lg:h-[50vh] mb-6 lg:mb-0">
        <div className="custom from-[#E7AE4E] to-[#DE8E09] bg-gradient-to-r bg-clip-text text-transparent text-8xl lg:text-[10vw] font-bold">
          Sunny
        </div>
        <div className="text-blue-900 mt-4 font-bold text-[#DE8E09]">
          Sunrise: 06:15 AM | Sunset: 05:45 PM
        </div>
      </div>

      {/* Center Image */}
      <div className="w-full lg:w-auto flex justify-center mb-6 lg:mb-0">
        <img
          src="https://i.ibb.co/bNYMBY1/image-2.png"
          alt="sun"
          className="h-64 lg:h-[50vh]"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex flex-col mt-0 lg:mt-2">
        {/* Current Weather */}
        <div className="flex flex-row lg:flex-col xl:flex-row justify-between items-center bg-white/30 backdrop-blur p-4 rounded-xl">
          <div className="text-5xl lg:text-8xl text-yellow-500 font-bold">
          {Math.round(weather?.data[0]?.app_temp)}°C
          </div>
          <div className="text-sm text-blue-900 font-bold">
            Humidity: 65% <br />
            Wind: 5 m/s <br />
            Pressure: 1015 hPa <br />
            UV Index: 0 of 10
          </div>
        </div>

        {/* Forecast Section */}
        <div className="bg-white/30 p-2 rounded-lg font-bold text-yellow-500 text-center mt-2">
            Next 6 Days Forecast
          </div>
        <div className="relative">
          {/* Left Scroll Button */}
          {isScrolledLeft && (
            <button
              onClick={() => handleScroll("left")}
              className="p-1 bg-yellow-500 text-white rounded-full absolute left-2 top-14 z-10 font-bold"
            >
              <BiChevronLeft className="text-2xl" />
            </button>
          )}

          {/* Forecast Data */}
          <div
            ref={containerRef}
            onScroll={updateArrows}
            className="w-full flex gap-3 mt-2 overflow-x-auto hide-scrollbar"
          >
            {forecastData.map((data, index) => (
              <div
                key={index}
                className="bg-white/30 rounded-lg py-4 px-6 text-center backdrop-blur w-30 flex-shrink-0 min-w-40"
              >
                <div className="font-bold text-gray-500 text-xs">{data.date}</div>
                <div className="flex justify-center">
                  <img src={data.icon} alt="icon" className="w-12 sm:w-16" />
                </div>
                <div>
                  <p className="font-bold text-[#DE8E09]">{data.temp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          {isScrolledRight && (
            <button
              onClick={() => handleScroll("right")}
              className="p-1 bg-yellow-500 text-white rounded-full absolute right-2 top-14 z-10 font-bold"
            >
              <BiChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
