import React from "react";
import ExercisePieChart from "../components/EquipmentPieGraph";
import BodyPartChart from "../components/BodyPartChart";
import { useSelector } from "react-redux";
import { selectWorkouts } from "../features/workouts/WorkoutsSlice";

const ChartLayout = () => {
  const workouts = useSelector(selectWorkouts);

  return (
    <div className="py-6">
      {workouts.length === 0 ? (
        <h1  className="text-gray-300 text-center text-xl font-bold">Sem gráficos para mostrar ainda...</h1>
      ) : (
        <>
          <h1 className="text-gray-300 text-center text-xl font-bold">
            O que tenho treinado
          </h1>
          <div className="flex mx-1 md:mx-20">
            <ExercisePieChart />
            <BodyPartChart />
          </div>
        </>
      )}
    </div>
  );
};

export default ChartLayout;
