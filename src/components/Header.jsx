import React, { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState("");
  const [AMorPM, setAMorPM] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };

      const formattedTime = date.toLocaleString("en-IN", options);
      setTime(formattedTime.slice(0, -3)); // Remove AM/PM part
      setAMorPM(formattedTime.slice(-2).toUpperCase()); // Store only AM/PM separately
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between items-center mt-6 md:mt-4">
      <div className="flex gap-2 items-center text-white">
        <h1 className="text-4xl font-bold">{time}</h1>
        <div className="font-semibold">
          <p className="text-xs m-0">{AMorPM}</p> {/* Display AM or PM */}
          <p className="text-xs m-0">TIME</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-white/30 p-2 gap-2 rounded-full backdrop-blur hidden md:flex">
        <button className="bg-white rounded-full">
          <img src="https://i.ibb.co/bP3XB2X/Group-1.png" alt="sun" />
        </button>
        <button className="rounded-full">
          <img src="https://i.ibb.co/Sn6FQQV/Group-2.png" alt="moon" />
        </button>
      </div>
      <div className="flex gap-2 items-center text-white">
        <h1 className="text-4xl font-bold">21 Nov</h1>
        <div className="font-semibold">
          <p className="text-xs m-0">2023</p>
          <p className="text-xs m-0">Date</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
