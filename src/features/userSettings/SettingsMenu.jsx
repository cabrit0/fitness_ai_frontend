import React, { useState } from "react";
import { useSelector } from "react-redux";

import CreateNewUser from "./CreateNewUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import SearchUserByName from "./SearchUserByName";
import SeeAllUsers from "./SeeAllUsers";

const SettingsMenu = () => {
  const [selectedAction, setSelectedAction] = useState("updateUser");
  const currentUser = useSelector((state) => state.login.user.foundUser);

  const buttons = [
    {
      key: 1,
      text: "Meus dados",
      onClick: () => setSelectedAction("updateUser"),
      selectedAction: "updateUser",
    },
    {
      key: 2,
      text: "Criar User",
      onClick: () => setSelectedAction("createNewUser"),
      selectedAction: "createNewUser",
    },
    {
      key: 3,
      text: "Apagar User",
      onClick: () => setSelectedAction("deleteUser"),
      selectedAction: "deleteUser",
    },
    {
      key: 4,
      text: "Procurar p/ nome",
      onClick: () => setSelectedAction("searchByName"),
      selectedAction: "searchByName",
    },
    {
      key: 5,
      text: "Meus Alunos",
      onClick: () => setSelectedAction("seeAllMyUsers"),
      selectedAction: "seeAllMyUsers",
    },
  ];

  let buttonArray;

  if (currentUser.roles === "Admin") {
    buttonArray = buttons;
  } else if (currentUser.roles === "Personal Trainer") {
    buttonArray = buttons.filter((button) =>
      ["updateUser", "searchByName", "seeAllMyUsers"].includes(
        button.selectedAction
      )
    );
  } else if (currentUser.roles === "Utilizador") {
    buttonArray = buttons.filter((button) =>
      ["updateUser"].includes(button.selectedAction)
    );
  } else {
    buttonArray = [];
  }

  return (
    <div>
      {currentUser.roles !== "Utilizador" && (
        <div className="flex justify-around items-center text-sm mx-4 md:text-md my-3 md:px-56">
          {buttonArray.map((button) => (
            <button
              className="w-full  mx-1 flex items-center justify-center h-12 md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold px-2 my-auto rounded-xl"
              onClick={button.onClick}
              key={button.key}
            >
              {button.text}
            </button>
          ))}
        </div>
      )}
      <div className="workouts-menu">
        {selectedAction === "createNewUser" && <CreateNewUser />}
        {selectedAction === "updateUser" && <EditUser />}
        {selectedAction === "searchByName" && <SearchUserByName />}
        {selectedAction === "seeAllMyUsers" && <SeeAllUsers />}
        {selectedAction === "deleteUser" && <DeleteUser />}
      </div>
    </div>
  );
};

export default SettingsMenu;
