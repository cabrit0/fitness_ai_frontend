import React from "react";
import { IoMdFitness } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GiStrongMan } from "react-icons/gi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="text-gray-300 font-bold px-10 pt-4 pb-14 flex justify-center">
      <div>
        <button className="btn mr-2 items-center inline-flex   hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125">
          <IoMdFitness className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Workouts</span>
        </button>
        <button className="btn mr-2 items-center inline-flex   hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125">
          <GiStrongMan className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Exercises</span>
        </button>
        <button className="btn mr-2 items-center inline-flex   hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125">
          <AiOutlineHome className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Home</span>
        </button>
        <button className="btn mr-2 items-center inline-flex   hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125">
          <AiOutlineHeart className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Health</span>
        </button>
        <button className="btn mr-2 items-center inline-flex   hover:text-white text-gray-300 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent hover:scale-125">
          <IoPersonOutline className="mx-1 text-3xl" />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
