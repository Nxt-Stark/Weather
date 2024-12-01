import React from 'react';

function Forecast() {
    const sunWithCloud = 'https://i.ibb.co/ZfnT78Z/image-5.png';

    const forecastData = [
      { time: '10:00 AM', temp: '30°C', icon: sunWithCloud },
      { time: '11:00 AM', temp: '30°C', icon: sunWithCloud },
      { time: '12:00 PM', temp: '30°C', icon: sunWithCloud },
      { time: '01:00 PM', temp: '30°C', icon: sunWithCloud },
      { time: '02:00 PM', temp: '30°C', icon: sunWithCloud },
      { time: '03:00 PM', temp: '30°C', icon: sunWithCloud },
      { time: '04:00 PM', temp: '30°C', icon: sunWithCloud },
      { time: '05:00 PM', temp: '30°C', icon: sunWithCloud },
    ];
    

  return (
    <div className="mt-4 xl:-mt-10">
      <h2 className="text-lg font-semibold w-full xl:w-1/4 flex justify-center py-2 px-8 bg-white/30 backdrop-blur rounded-xl mb-4 custom text-[#DE8E09]">Hourly forecast</h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 justify-center">
        {forecastData.map((data, index) => (
          <div
            key={index}
            className="bg-white/30 rounded-lg py-4 px-6 text-center backdrop-blur custom"
          >
            <div className='font-bold text-gray-500 text-sm'>{data.time}</div>
            <div className='flex justify-center'><img src={data.icon} alt="icon" className='w-16' /></div>
            <div><p className='font-bold text-[#DE8E09]'>Temp: {data.temp}</p></div>
          </div>
        ))}
      </div>
      <div className='w-full my-2 flex justify-center'>
      <h2 className='text-center font-bold custom text-xl text-[#DE8E09] bg-white/30 px-6 py-1 backdrop-blur rounded-lg'>Made by <a href="https://nxt-stark.github.io/Personal-Website/" className='text-blue-900'>Hadil</a> | WeatherBit</h2>
    </div></div>
  );
}

export default Forecast;
