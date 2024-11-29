import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4 my-4 xl:my-0">
      <div className="text-center text-white">
        <h1 className="font-bold text-3xl">Vishakapattanam</h1>
        <p className="font-semibold">Tamil Nadu, India</p>
      </div>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter Location"
          className="py-4 pl-7 pr-14 rounded-full w-full focus:outline-none backdrop-blur bg-white/50 placeholder-yellow text-yellow-500"
        />
        <button className="absolute right-2 top-1.5 rounded-full bg-yellow-500 p-2">
          <img
            className=" h-7 w-7 text-white"
            src="https://i.ibb.co/1m0B1Cq/Search-01-1.png"
            alt="Search-01"
            border="0"
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
