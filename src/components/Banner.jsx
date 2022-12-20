import React from "react";

function Banner() {
  const currentTime = new Date();
  const currentDay = currentTime.toLocaleString("default", { weekday: "long" });

  return (
    <div className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Gym Title</h1>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Request Information
          </button>
        </div>
        <p className="text-xl font-bold mt-4">
          Today is {currentDay}, {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default Banner;
