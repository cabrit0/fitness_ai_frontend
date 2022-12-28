import React, { useState } from "react";
import { TbClipboardPlus } from "react-icons/tb";
import { TiArrowSync } from "react-icons/ti";
import { IoIosFitness } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";

import CreateWorkout from "./CreateWorkout";
import UpdateWorkout from "./UpdateWorkout";
import SeeAllWorkouts from "./SeeAllWorkouts";
import DeleteWorkout from "./DeleteWorkout";

const WorkoutsMenu = () => {
  const [selectedAction, setSelectedAction] = useState("seeAll");

  return (
    <div>
      <div className="flex text-sm md:text-md mx-auto md:mx-36 my-6">
        <button
          className="w-full mx-2 flex items-center justify-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-green-700 font-bold py-1 px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("create")}
        >
          <TbClipboardPlus className="base-block sm:hidden mr-2" />
          <span className="">
            Criar <span className="hidden sm:block">Workout</span>
          </span>
        </button>
        <button
          className="w-full mx-0.5 mx-2 flex items-center justify-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold py-1 px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("update")}
        >
          <TiArrowSync className="base-block sm:hidden mr-2" />
          <span className="">
            Atualizar <span className="hidden sm:block">Workout</span>
          </span>
        </button>
        <button
          className="w-full mx-0.5 mx-2 flex items-center justify-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold py-1 px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("seeAll")}
        >
          <IoIosFitness className="base-block sm:hidden mr-2" />
          <span className="">
            Todos <span className="hidden sm:block">Workouts</span>
          </span>
        </button>
        <button
          className="w-full mx-0.5 mx-2 flex items-center justify-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-red-500 font-bold py-1 px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("delete")}
        >
          <RiDeleteBin2Line className="base-block sm:hidden mr-2" />
          <span className="">
            Apagar <span className="hidden sm:block">Workouts</span>
          </span>
        </button>
      </div>
      <div className="workouts-menu">
        {selectedAction === "create" && <CreateWorkout />}
        {selectedAction === "update" && <UpdateWorkout />}
        {selectedAction === "seeAll" && <SeeAllWorkouts />}
        {selectedAction === "delete" && <DeleteWorkout />}
      </div>
    </div>
  );
};

export default WorkoutsMenu;
