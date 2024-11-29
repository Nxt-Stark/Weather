import React from "react";

function WeatherCard() {
  return (
    <div className="text-center w-full flex justify-between items-start" >
      <div className="w-1/3 text-left flex flex-col justify-center h-[50vh]">
        <div className="from-[#E7AE4E] to-[#DE8E09] bg-gradient-to-r bg-clip-text text-transparent text-[10vw] font-bold custom">Sunny</div>
        <div className="text-gray-700 mt-4 font-bold text-[#DE8E09] -mt-10">
          Sunrise: 06:15 AM | Sunset: 05:45 PM
        </div>
      </div>
      <div>
      <img src="https://i.ibb.co/bNYMBY1/image-2.png" alt="sun" border="0" className="h-[50vh]"/>
      </div>
      <div className="mt-6 justify-between items-center w-1/3 text-right">
        <div className="text-4xl text-orange-500">28°C</div>
        <div className="text-sm text-gray-500">
          Humidity: 65% <br />
          Wind: 5 m/s <br />
          Pressure: 1015 hPa <br />
          UV Index: 0 of 10
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
