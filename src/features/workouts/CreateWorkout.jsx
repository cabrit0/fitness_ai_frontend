import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWorkout } from "./workoutsSlice";
import { selectExercises } from "../exercises/exercisesSlice";

const CreateWorkout = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([]);
  const [reps, setReps] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createWorkout({ workout: { name, description, exercises, reps } })
    );
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const exercisesServer = useSelector(selectExercises);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="px-10 pt-3 w-full">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-200  font-bold text-xl mb-2">
          Nome:
        </label>
        <input
          className="border opacity-70 focus:opacity-100 rounded-lg p-2 w-full"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
          Descrição:
        </label>
        <textarea className="border opacity-70 focus:opacity-100 rounded-lg p-2 w-full"></textarea>
        <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
          Exercícios:
        </label>
        <button
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={toggleModal}
        >
          Add Exercises
        </button>
        <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
          Repeticoes:
        </label>
        <input
          className="border opacity-70 focus:opacity-100 rounded-lg p-2 w-full"
          type="number"
          value={reps}
          onChange={(event) => setReps(event.target.value.split(","))}
        />
        <button
          className="bg-green-800  opacity-70 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full mt-4"
          type="submit"
        >
          Create Workout
        </button>
      </form>
    </div>
  );
};

export default CreateWorkout;

