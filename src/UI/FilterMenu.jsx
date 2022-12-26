import React, { useState, useRef, useEffect } from "react";
import { IoIosBody } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

const FilterMenu = ({ exercises, onFilterChange, backButtonHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchInputVisible) {
      searchInputRef.current.focus();
    }
  }, [isSearchInputVisible]);

  const handleSearchButtonClick = () => {
    setIsSearchInputVisible(!isSearchInputVisible);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleBodyPartChange = (event) => {
    setSelectedBodyPart(event.target.value);
  };

  const handleMuscleChange = (event) => {
    setSelectedMuscle(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filteredExercises = exercises.filter((exercise) => {
      if (
        searchTerm &&
        !exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      if (selectedBodyPart && exercise.bodyPart !== selectedBodyPart) {
        return false;
      }
      if (selectedMuscle && exercise.muscle !== selectedMuscle) {
        return false;
      }
      if (selectedEquipment && exercise.equipment !== selectedEquipment) {
        return false;
      }
      return true;
    });
    onFilterChange(filteredExercises);
  };

  const bodyParts = Array.from(
    new Set(exercises.map((exercise) => exercise.bodyPart))
  );
  const muscles = Array.from(
    new Set(exercises.map((exercise) => exercise.target))
  );
  const equipment = Array.from(
    new Set(exercises.map((exercise) => exercise.equipment))
  );

  return (
    <form
      onSubmit={handleFilterSubmit}
      className="text-center items-center justify-center w-full my-2"
    >
      <div className="flex md:mx-10 mx-0">
        {isSearchInputVisible ? (
          <div className="relative w-full mx-2 rounded-md shadow-sm">
            <input
              className="form-input text-center py-2 px-4 block  w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Procura nome"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              ref={searchInputRef}
              onBlur={() => setIsSearchInputVisible(false)}
            />
          </div>
        ) : (
          <button
            type="button"
            className="bg-blue-500 opacity-70 text-white text-xl font-bold rounded-2xl block mr-2 px-3 lg:px-10 transition-all duration-300 ease-in-out hover:border-transparent hover:opacity-100 hover:scale-110 w-auto"
            onClick={handleSearchButtonClick}
          >
            <IoSearch className="" />
          </button>
        )}
        <div className="relative w-full mx-0.5 rounded-md shadow-sm">
          <select
            className="form-input text-center py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            value={selectedBodyPart}
            onChange={handleBodyPartChange}
          >
            <option value="">
              <IoIosBody className="w-4 h-4 text-black text-md" />
              Corpo
            </option>
            {bodyParts.map((bodyPart) => (
              <option key={bodyPart} value={bodyPart}>
                {bodyPart}
              </option>
            ))}
          </select>
        </div>
        <div className="relative w-full mx-0.5 rounded-md shadow-sm">
          <select
            className="form-input py-2 text-center px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            value={selectedMuscle}
            onChange={handleMuscleChange}
          >
            <option value="">
              <GiBiceps />
              Músculo
            </option>
            {muscles.map((target) => (
              <option key={target} value={target}>
                {target}
              </option>
            ))}
          </select>
        </div>
        <div className="relative w-full mx-0.5 rounded-md shadow-sm">
          <select
            className="form-input py-2 text-center px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            value={selectedEquipment}
            onChange={handleEquipmentChange}
          >
            <option value="">
              <BiDumbbell />
              Equipamento
            </option>
            {equipment.map((equip) => (
              <option key={equip} value={equip}>
                {equip}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex md:mx-10 mt-2">
        <button
          className="bg-blue-500 opacity-70 text-white font-bold rounded-2xl block mr-3 p-2 lg:px-10 transition-all duration-300 ease-in-out hover:border-transparent hover:opacity-100 hover:scale-110 w-auto"
          type="submit"
          onClick={handleFilterSubmit}
        >
          Filtrar
        </button>
        <button
          className="bg-white text-xl opacity-70 text-blue-500 font-bold rounded-2xl block p-2 px-3 lg:px-10 transition-all duration-300 ease-in-out hover:border-transparent hover:opacity-100 hover:scale-110 w-auto"
          onClick={backButtonHandler}
        >
          <FaArrowLeft />
        </button>
      </div>
    </form>
  );
};

export default FilterMenu;
