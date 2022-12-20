import React from "react";

function ActivityList({ activities }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Gym Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="my-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-400 mr-4 flex items-center justify-center">
              <i className="fas fa-dumbbell text-2xl text-white"></i>
            </div>
            <div className="flex-1 text-xl font-bold text-gray-700">
              {activity.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
