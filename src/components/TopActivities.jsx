import React from "react";
import { activities } from "./Activities";

const TopActivities = () => {
  // Sort the activities by rating in descending order
  const sortedActivities = [...activities].sort((a, b) => b.rating - a.rating);

  // Get the top 7 activities
  const topActivities = sortedActivities.slice(0, 7);

  return (
    <div className="relative overflow-hidden mt-10 pt-5 px-5 rounded-lg">
      <div className="text-3xl font-bold text-center text-gray-600 px-4 py-6">
        Top Actividades
      </div>
      <div className="relative overflow-x-scroll no-scrollbar py-6 h-85">
        <div className="flex md:justify-start lg:justify-center">
          {topActivities.map((activity) => (
            <div key={activity.id} className="px-4 mr-4 z-10">
              <div className="relative rounded-lg shadow-lg w-48 h-full bg-black-500 opacity-80 bg-gray-800 transition-all duration-300 ease-in-out hover:opacity-100 transform hover:-translate-y-0.5 hover:scale-110">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 rounded-t-lg object-cover"
                />
                <div className="px-4 py-4">
                  <h1 className="text-2xl font-bold text-white">
                    {activity.title}
                  </h1>
                  <p className="text-lg text-gray-400">
                    {activity.description}
                  </p>
                  <p className="text-lg font-bold text-white">
                    Rating: {activity.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopActivities;
