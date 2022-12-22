import React from "react";
import { activities } from "./Activities";

const TopActivities = () => {
  // Sort the activities by rating in descending order
  const sortedActivities = [...activities].sort((a, b) => b.rating - a.rating);

  // Get the top 7 activities
  const topActivities = sortedActivities.slice(0, 7);

  return (
    <div className="relative overflow-hidden rounded-lg no-scrollbar overflow-x-scroll">
      <div className="relative px-4 py-6 h-85">
        <div className="flex ">
          {topActivities.map((activity) => (
            <div key={activity.id} className="px-4 mr-4">
              <div className="relative rounded-lg shadow-lg w-48 h-full bg-black-500 opacity-80 bg-gray-800 transition-all duration-300 ease-in-out hover:opacity-100 hover:transform scale-105">
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
