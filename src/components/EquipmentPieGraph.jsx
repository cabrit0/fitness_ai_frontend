import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectWorkouts } from "../features/workouts/WorkoutsSlice";

const EquipmentBarChart = () => {
  const workouts = useSelector(selectWorkouts);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Calculate the frequency of each equipment type in the workouts array
    const equipmentCounts = workouts.reduce((counts, workout) => {
      workout.exercises.forEach((exercise) => {
        const equipment = exercise.equipment;
        if (counts[equipment]) {
          counts[equipment]++;
        } else {
          counts[equipment] = 1;
        }
      });
      return counts;
    }, {});
    // Calculate the percentage of each equipment type
    const totalExercises = workouts.reduce((total, workout) => {
      return total + workout.exercises.length;
    }, 0);
    const equipmentPercentages = Object.keys(equipmentCounts).map((key) => {
      return {
        equipment: key,
        percentage: (equipmentCounts[key] / totalExercises) * 100,
      };
    });
    setChartData(equipmentPercentages);
  }, [workouts]);

  return (
    <div className="w-full py-2 my-6 h-36 flex flex-col justify-between">
      {chartData.map((data) => (
        <div
          key={data.equipment}
          className="h-full flex items-center my-0.5 px-4 hover:text-blue-600"
        >
          <div className="text-gray-400 font-bold w-1/4 transition duration-500 ease-in-out">
            {data.equipment}
          </div>
          <div className="w-3/4 h-full relative bg-gray-400 rounded-full overflow-hidden transition duration-500 ease-in-out">
            <div
              style={{ width: `${data.percentage}%` }}
              className="bg-blue-500 h-full rounded-full absolute left-0 top-0"
            ></div>
            <div className="text-gray-700 font-bold absolute right-0 top-0 px-2 py-1">
              {data.percentage.toFixed(2)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentBarChart;
