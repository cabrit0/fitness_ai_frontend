import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectExercises,
} from "../exercises/exercisesSlice";

const ExerciseModal = ({ toggleModal, addExercise }) => {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [reps, setReps] = useState("");

  const exercises = useSelector(selectExercises);
/*   const randomExercises = useSelector(selectRandomExercises);
  const dispatch = useDispatch(); */

  const handleSubmit = (event) => {
    event.preventDefault();
    addExercise(selectedExercise, reps);
    console.log(selectedExercise)
    toggleModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container mt-4">
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            Escolhe exercício:
          </label>
          <select
            className="block appearance-none w-full bg-white border opacity-70 h-8 focus:opacity-100 rounded-lg p-2 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedExercise}
            onChange={(event) => setSelectedExercise(event.target.value)}
          >
            <option value="">---</option>
            {exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
            {/* <option value="viewAll">Ver todos</option> */}
          </select>

          <label className="block  text-gray-200 text-sm font-bold mt-4 mb-2">
            Number of reps:
          </label>
          <input
            className="shadow appearance-none border opacity-70 h-8 focus:opacity-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={reps}
            onChange={(event) => setReps(event.target.value)}
            placeholder="número de repetições"
          />
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 opacity-70 hover:opacity-100 text-gray-200 font-bold py-1 px-5 rounded-2xl focus:outline-none focus:shadow-outline mx-4 transition-transform duration-200 transform hover:-
translate-y-0.5 hover:scale-110"
              type="submit"
            >
              Adiciona Exercício
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 opacity-70 hover:opacity-100 text-white font-bold py-1 px-5 rounded-2xl focus:outline-none focus:shadow-outline mx-4 transition-transform duration-200 transform hover:-
translate-y-0.5 hover:scale-110"
              onClick={() => toggleModal(false)}
            >
              Sair
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExerciseModal;
