import React from "react";
import { IoMdFitness } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GiStrongMan } from "react-icons/gi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="text-gray-300 font-bold p-10 flex justify-center">
      <div>
        <button className="btn mx-2 items-center inline-flex  hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
          <IoMdFitness />
          Workouts
        </button>
        <button className="btn mx-2 items-center inline-flex  hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
          <GiStrongMan />
          Exercises
        </button>
        <button className="btn mx-2 items-center inline-flex  hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
          <AiOutlineHome />
          Home
        </button>
        <button className="btn mx-2 items-center inline-flex  hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
          <AiOutlineHeart />
          Health
        </button>
        <button className="btn mx-2 items-center inline-flex  hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
          <IoPersonOutline />
          Profile
        </button>
      </div>
    </div>
  );
};

export default Menu;
