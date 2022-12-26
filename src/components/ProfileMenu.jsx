import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage, setCurrentPage } from "../pages/pagesSlice";

import { IoMdFitness } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GiStrongMan } from "react-icons/gi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";

const Menu = () => {
  const navigate = useNavigate();
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const handleWorkoutsClick = () => {
    dispatch(setCurrentPage("workouts"));
    navigate("/user/workouts");
  };

  const handleExercisesClick = () => {
    dispatch(setCurrentPage("exercises"));
    navigate("/user/exercises");
  };

  const handleHomeClick = () => {
    dispatch(setCurrentPage("home"));
    navigate("/user/home");
  };

  const handleWellbeingClick = () => {
    dispatch(setCurrentPage("wellbeing"));
    navigate("/user/wellbeing");
  };

  const handleProfileClick = () => {
    dispatch(setCurrentPage("profile"));
    navigate("/user/settings");
  };

  return (
    <div className="text-gray-300 font-bold px-10 pt-4 pb-14 flex justify-center">
      <div>
        <button
          className={`btn mr-2 items-center inline-flex hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125 ${
            currentPage === "workouts" ? "text-white" : ""
          }`}
          onClick={handleWorkoutsClick}
        >
          <IoMdFitness className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Workouts</span>
        </button>
        <button
          className={`btn mr-2 items-center inline-flex hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125 ${
            currentPage === "exercises" ? "text-white" : ""
          }`}
          onClick={handleExercisesClick}
        >
          <GiStrongMan className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Exercícios</span>
        </button>
        <button
          className={`btn mr-2 items-center inline-flex hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125 ${
            currentPage === "home" ? "text-white" : ""
          }`}
          onClick={handleHomeClick}
        >
          <AiOutlineHome className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Home</span>
        </button>
        <button
          className={`btn mr-2 items-center inline-flex hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125 ${
            currentPage === "wellbeing" ? "text-white" : ""
          }`}
          onClick={handleWellbeingClick}
        >
          <AiOutlineHeart className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Bem Estar</span>
        </button>
        <button
          className={`btn mr-2 items-center inline-flex hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125 ${
            currentPage === "profile" ? "text-white" : ""
          }`}
          onClick={handleProfileClick}
        >
          <IoPersonOutline className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Perfil</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
