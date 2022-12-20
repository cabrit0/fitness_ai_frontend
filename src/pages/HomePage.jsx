import React from "react";
import ActivityList from "../components/ActivityList";
import Banner from "../components/Banner";

function HomePage() {
  const activities = [
    { id: 1, name: "Yoga" },
    { id: 2, name: "Pilates" },
    { id: 3, name: "Spinning" },
  ];

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Banner />
      <div className="my-8 mx-4 lg:mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Welcome to our fitness center!
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Here at our center, we offer a wide range of activities to help you
          reach your fitness goals. From yoga and pilates to spinning and more,
          we have something for everyone.
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Login
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-900 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Request Info
          </button>
        </div>
      </div>
      <ActivityList activities={activities} />
    </div>
  );
}

export default HomePage;
