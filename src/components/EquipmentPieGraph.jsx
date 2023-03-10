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
    <div className="w-full py-2 mb-20 lg:mb-32 my-6 h-36 opacity-80 flex flex-col justify-center hover:90">
      <h4 className="text-gray-300 text-center text-sm font-bold">
        Por equipamento
      </h4>
      {chartData.map((data) => (
        <div
          key={data.equipment}
          className="h-full flex my-0.5 mx-3 md:mx-8 hover:opacity-90"
        >
          <div className="w-full h-8 relative bg-gray-400 rounded-full overflow-hidden">
            <div
              style={{ width: `${data.percentage}%` }}
              className="bg-blue-500 h-full rounded-full absolute left-0 top-0 transition duration-500 ease-in-out"
            ></div>
            <div className="text-gray-800 font-bold w-full text-sm md:text-md lg:text-lg flex justify-between px-3 py-1 transition duration-500 ease-in-out ">
              <div className="text-gray-800 font-bold z-50">
                {data.equipment}
              </div>
              <div className="text-gray-800 font-bold z-50">
                {data.percentage.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentBarChart;
