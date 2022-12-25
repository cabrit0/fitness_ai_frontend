import React, { useState } from "react";

const FilterMenu = ({ exercises, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
    new Set(exercises.map((exercise) => exercise.muscle))
  );
  const equipment = Array.from(
    new Set(exercises.map((exercise) => exercise.equipment))
  );

  return (
    <form
      onSubmit={handleFilterSubmit}
      className="flex items-center justify-between w-full my-3"
    >
      <div className="relative rounded-md shadow-sm">
        <input
          className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          placeholder="Search by name"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="relative rounded-md shadow-sm">
        <select
          className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          value={selectedBodyPart}
          onChange={handleBodyPartChange}
        >
          <option value="">Filter by body part</option>
          {bodyParts.map((bodyPart) => (
            <option key={bodyPart} value={bodyPart}>
              {bodyPart}
            </option>
          ))}
        </select>
      </div>
      <div className="relative rounded-md shadow-sm">
        <select
          className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          value={selectedMuscle}
          onChange={handleMuscleChange}
        >
          <option value="">Filter by muscle</option>
          {muscles.map((target) => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
      </div>
      <div className="relative rounded-md shadow-sm">
        <select
          className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          value={selectedEquipment}
          onChange={handleEquipmentChange}
        >
          <option value="">Filter by equipment</option>
          {equipment.map((equipment) => (
            <option key={equipment} value={equipment}>
              {equipment}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 opacity-70 text-white font-bold rounded-2xl block w-full p-2 transition-all duration-300 ease-in-out hover:border-transparent hover:opacity-100 hover:scale-110 sm:w-auto"
        type="submit"
      >
        Filter
      </button>
    </form>
  );
};

export default FilterMenu;
