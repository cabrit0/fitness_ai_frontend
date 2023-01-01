import React, { useState, useEffect } from "react";
import ExercisesCardWorkouts from "../features/exercises/ExercisesCardWorkouts";
import ExerciseModal from "../features/workouts/ExerciseModal";
import { useSelector, useDispatch } from "react-redux";
import {
  updateWorkout,
  selectWorkouts,
} from "../features/workouts/WorkoutsSlice";
import { selectExercises } from "../features/exercises/exercisesSlice";

const ModalWorkoutUpdate = ({
  workout,
  name,
  setName,
  description,
  setDescription,
  exercises,
  setExercises,
  reps,
  setReps,
  message,
  setMessage,
  isUpdated,
  handleUpdate,
  exitModal,
}) => {
  const dispatch = useDispatch();
  const workouts = useSelector(selectWorkouts);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const exercisesFromServer = useSelector(selectExercises);

  const addExercise = (id) => {
    // Find the exercise with the given id in the exercisesFromServer array
    const exercise = exercisesFromServer.find((exercise) => exercise.id === id);
    console.log(exercise);

    // Update the state of the exercises arrays
    setExercises([...exercises, exercise]);
  };

  // Set the initial state of the input fields with the values from the current workout object
  useEffect(() => {
    setName(workout.name);
    setDescription(workout.description);
    setExercises(workout.exercises);
    setReps(workout.reps);
  }, [workout]);

  const toggleModalExercises = () => {
    setModalIsOpen(!modalIsOpen);
  };
  console.log(workout);

  return (
    <div className=" pt-3 w-full">
      {modalIsOpen ? (
        <ExerciseModal
          addExercise={addExercise}
          toggleModal={toggleModalExercises}
        />
      ) : (
        <>
          {isUpdated ? (
            <p className="text-center text-2xl font-bold text-gray-200">
              {message}
            </p>
          ) : (
            <form onSubmit={handleUpdate}>
              <label className="block text-gray-200  font-bold text-xl mb-2">
                Nome:
              </label>
              <input
                className="border opacity-70 h-8 focus:opacity-100 rounded-lg p-2 w-full"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
                Descrição:
              </label>
              <textarea
                className="border opacity-70 h-12 focus:opacity-100 rounded-lg p-2 w-full"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
              <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
                Exercícios:
              </label>
              <button
                className="bg-gray-200 hover:bg-gray-400 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline text-gray-800 font-bold py-1 px-4 rounded-full"
                onClick={toggleModalExercises}
              >
                Acidiciona Exercícios
              </button>
              {exercises.map((exercise) => (
                <ExercisesCardWorkouts key={exercise.id} exercise={exercise} />
              ))}
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
              <button
                className="px-4 py-2 mt-4 mb-2 bg-blue-500 opacity-70 hover:opacity-100 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
                type="submit"
              >
                Atualizar Treino
              </button>
              <button
                className="px-4 py-2 mx-4 bg-blue-700 opacity-70 hover:opacity-100 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
                onClick={() => exitModal()}
              >
                Sair
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default ModalWorkoutUpdate;
