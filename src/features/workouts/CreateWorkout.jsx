import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createWorkout } from "./WorkoutsSlice";
import { selectExercises } from "../exercises/exercisesSlice";
import ExerciseModal from "./ExerciseModal";
import ExercisesCardWorkouts from "../exercises/ExercisesCardWorkouts";

const CreateWorkout = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([]);
  const [reps, setReps] = useState([]);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const userAccessToken = useSelector((state) => state.login.user.accessToken);

  //console.log(userId, userAccessToken)

  const addExercise = (id) => {
    // Find the exercise with the given id in the exercisesFromServer array
    const exercise = exercisesFromServer.find((exercise) => exercise.id === id);
    console.log(exercise);

    // Update the state of the exercises arrays
    setExercises([...exercises, exercise]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      createWorkout({ workout: { id, name, description, exercises, reps } })
    );

    const data = {
      id,
      name,
      description,
      exercises: exercises.map((exercise) => {
        return {
          name: exercise.name,
          bodyPart: exercise.bodyPart,
          target: exercise.target,
          equipment: exercise.equipment,
          animatedGif: exercise.gifUrl,
        };
      }),
      reps,
    };
    axios
      .post(
        "https://fitness-api.onrender.com/api/v1/user/workouts&exercises",
        data,
        {
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      )
      .then((response) => {
        // do something with the response here, like dispatch an action to update the state
        console.log(response);
      })
      .catch((error) => {
        // handle the error here
        console.log(error);
      });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const exercisesFromServer = useSelector(selectExercises);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="px-10 pt-3 w-full">
      {modalIsOpen ? (
        <ExerciseModal addExercise={addExercise} toggleModal={toggleModal} />
      ) : (
        <form onSubmit={handleSubmit}>
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
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
            Exercícios:
          </label>
          <button
            className="bg-gray-200 hover:bg-gray-400 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline text-gray-800 font-bold py-1 px-4 rounded-full"
            onClick={toggleModal}
          >
            Acidiciona Exercícios
          </button>
          {exercises.map((exercise) => (
            <ExercisesCardWorkouts key={exercise.id} exercise={exercise} />
          ))}
          <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
            Repeticoes:
          </label>
          <input
            className="border opacity-70 h-8 focus:opacity-100 rounded-lg p-2 w-full"
            type="number"
            value={reps}
            onChange={(event) => setReps(event.target.value)}
          />
          <button
            className="bg-green-700  opacity-70 hover:opacity-100 text-white font-bold py-1 px-4 rounded-full mt-4"
            type="submit"
          >
            Cria Workout
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateWorkout;
