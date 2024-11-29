import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';

function mainPage() {
  return (
    <div className="font-sans w-full px-[6vw]">
      <Header />
      <SearchBar />
      <WeatherCard />
      <Forecast />
    </div>
  );
}

export default mainPage;
