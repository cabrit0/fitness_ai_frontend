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
  const isLoading = useSelector((state) => state.workouts.isLoading);
  const [message, setMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const exercisesFromServer = useSelector(selectExercises);

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

    try {
      const { API_ENDPOINTS, getAuthHeaders } = await import("../../config/api");

      const response = await axios.post(
        API_ENDPOINTS.WORKOUTS,
        data,
        {
          headers: getAuthHeaders(userAccessToken),
        }
      );

      // do something with the response here, like dispatch an action to update the state
      dispatch(
        createWorkout({
          workout: { id, name, description, exercises, reps },
        })
      );
      console.log(response);
      setMessage("Workout Criado com sucesso!");
      setIsCreated(true);
    } catch (error) {
      console.error("Erro ao criar workout:", error);
      setMessage("Erro ao criar workout");
    }
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  console.log(isLoading);

  return (
    <div className="px-10 md:px-52 pt-3 w-full">
      {modalIsOpen ? (
        <ExerciseModal addExercise={addExercise} toggleModal={toggleModal} />
      ) : (
        <>
          {isCreated ? (
            <p className="text-center text-2xl font-bold text-gray-200">
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block text-gray-200  font-bold text-xl mb-2">
                Nome:
              </label>
              <input
                className="border opacity-70 h-8 focus:opacity-100 rounded-lg p-2 w-full transition-all duration-300 ease-in-out focus:scale-105"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label className="block text-gray-200  font-bold text-xl mb-2 mt-4">
                Descrição:
              </label>
              <textarea
                className="border opacity-70 h-12 focus:opacity-100 rounded-lg p-2 w-full transition-all duration-300 ease-in-out focus:scale-105"
                value={description}
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
              <label className="block  text-gray-200 text-sm font-bold mt-4 mb-2">
                Number of reps:
              </label>
              <input
                className="shadow appearance-none border opacity-70 h-8 focus:opacity-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out focus:scale-105"
                type="number"
                value={reps}
                onChange={(event) => setReps(event.target.value)}
                placeholder="número de repetições"
              />
              <button
                className="px-4 py-2 mt-4 mb-2 bg-blue-500 opacity-70 hover:opacity-100 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
                type="submit"
              >
                Criar Treino
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default CreateWorkout;
