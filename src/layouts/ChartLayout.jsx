import React from "react";
import ExercisePieChart from "../components/EquipmentPieGraph";
import BodyPartChart from "../components/BodyPartChart";

const ChartLayout = () => {
  return (
    <div className="py-6">
        <h1 className="text-gray-300 text-center text-xl font-bold">Meu Progresso</h1>
      <div className="flex mx-1 md:mx-20">
        <ExercisePieChart />
        <BodyPartChart />
      </div>
    </div>
  );
};

export default ChartLayout;
