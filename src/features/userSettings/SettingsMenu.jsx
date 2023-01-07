import React, { useState } from "react";

import CreateNewUser from "./CreateNewUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import SearchUserByName from "./SearchUserByName";
import SeeAllUsers from "./SeeAllUsers";
import RequestPT from "./RequestPT";

const SettingsMenu = () => {
  const [selectedAction, setSelectedAction] = useState("updateUser");

  return (
    <div>
      <div className="flex justify-around items-center text-sm mx-4 md:text-md my-3 md:px-56">
        <button
          className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("updateUser")}
        >
          Meus dados
        </button>
        <button
          className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-green-700 font-bold px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("createNewUser")}
        >
          Criar User
        </button>
        <button
          className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-red-500 font-bold px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("deleteUser")}
        >
          Apagar User
        </button>
        <button
          className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("searchByName")}
        >
          Procurar p/ nome
        </button>
        <button
          className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold px-2 my-auto rounded-xl"
          onClick={() => setSelectedAction("seeAllMyUsers")}
        >
          Meus Alunos
        </button>
      </div>
      <div className="workouts-menu">
        {selectedAction === "createNewUser" && <CreateNewUser />}
        {selectedAction === "updateUser" && <EditUser />}
        {selectedAction === "searchByName" && <SearchUserByName />}
        {selectedAction === "seeAllMyUsers" && <SeeAllUsers />}
        {selectedAction === "deleteUser" && <DeleteUser />}
        {selectedAction === "contactPT" && <RequestPT />}
        <button
          className="w-18% font-bold py-1 px-4 rounded-xl mx-auto my-6 flex items-center justify-end bg-gray-200 text-gray-700 opacity-70 transition-all hover:-translate-y-0.5 hover:scale-110 duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:opacity-80 hover:bg-amber-400"
          onClick={() => setSelectedAction("contactPT")}
        >
          Quero um Personal Trainer
        </button>
      </div>
    </div>
  );
};

export default SettingsMenu;
