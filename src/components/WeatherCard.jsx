import React from "react";

function WeatherCard() {
  const sunWithCloud = "https://i.ibb.co/ZfnT78Z/image-5.png";

  const forecastData = [
    { date: "01-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "02-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "03-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "04-12-2024", temp: "30°C", icon: sunWithCloud },
    { date: "05-12-2024", temp: "30°C", icon: sunWithCloud },
  ];

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-start">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center h-auto lg:h-[50vh] mb-6 lg:mb-0">
        <div className="from-[#E7AE4E] to-[#DE8E09] bg-gradient-to-r bg-clip-text text-transparent text-8xl lg:text-[8vw] font-bold">
          Sunny
        </div>
        <div className="text-gray-700 mt-4 font-bold text-[#DE8E09]">
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
        <div className="flex justify-between items-center bg-white/50 backdrop-blur p-4 rounded-xl">
          <div className="text-5xl lg:text-8xl text-yellow-500 font-bold">
            28°C
          </div>
          <div className="text-sm text-gray-500">
            Humidity: 65% <br />
            Wind: 5 m/s <br />
            Pressure: 1015 hPa <br />
            UV Index: 0 of 10
          </div>
        </div>

        {/* Forecast Section */}
        <div className="mt-2">
          <div className="bg-white/50 p-2 rounded-lg font-bold text-yellow-500 text-center">
            Next 4 Days Forecast
          </div>
          <div className="w-full flex gap-3 mt-2 overflow-x-auto hide-scrollbar">
            {forecastData.map((data, index) => (
              <div
                key={index}
                className="bg-white/30 rounded-lg py-4 px-6 text-center backdrop-blur w-30 flex-shrink-0" // Increased width and made it shrinkable
              >
                <div className="font-bold text-gray-500 text-xs">
                  {data.date}
                </div>
                <div className="flex justify-center">
                  <img src={data.icon} alt="icon" className="w-12 sm:w-16" />
                </div>
                <div>
                  <p className="font-bold text-[#DE8E09]">{data.temp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
