import React, { useState, useEffect } from "react";
import {
  HiOutlineUserCircle,
  HiOutlinePhone,
  HiOutlineInformationCircle,
  HiOutlineGlobeAlt,
  HiMenu,
} from "react-icons/hi";
import { HiOutlineBackward } from "react-icons/hi2";

function Banner() {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-100">Gym Title</h1>
          <div className="hidden md:flex">
            <div className="flex items-center justify-center font-bold py-2 px-4 mr-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
              <HiOutlineUserCircle className="mr-2" />
              Login
            </div>
            <div className="flex items-center justify-center font-bold py-2 px-4 mr-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
              <HiOutlinePhone className="mr-2" />
              Contact
            </div>
            <div className="flex items-center justify-center font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
              <HiOutlineInformationCircle className="mr-2" />
              About
            </div>
            <div className="flex items-center justify-center font-bold py-2 px-4 ml-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
              <HiOutlineGlobeAlt className="mr-2" />
              Website
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiMenu className="mr-2" />
              Menu
            </button>
          </div>
        </div>
        <div className="text-gray-300 text-sm mt-4 opacity-75">
          {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </div>{" "}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-0 right-0 w-${80} h-full bg-gray-800 z-50 transform transition duration-400 ease-in-out`}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gray-700">
            <h1 className="text-3xl font-bold text-gray-100">Menu</h1>
            <button
              onClick={toggleMenu}
              className="font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiOutlineBackward className="mr-2" />
              Back
            </button>
          </div>
          <div className="py-4">
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiOutlineUserCircle className="mr-2" />
              Login
            </div>
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiOutlinePhone className="mr-2" />
              Contact
            </div>
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiOutlineInformationCircle className="mr-2" />
              About
            </div>
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center font-bold py-2 px-4 hover:text-white text-gray-400 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:bg-transparent hover:border-transparent"
            >
              <HiOutlineGlobeAlt className="mr-2" />
              Website
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
