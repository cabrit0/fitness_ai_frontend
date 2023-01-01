import React, { useState, useEffect } from "react";
import axios from "axios";
import ExercisesCardWorkouts from "../features/exercises/ExercisesCardWorkouts";
import ExerciseModal from "../features/workouts/ExerciseModal";
import { useSelector, useDispatch } from "react-redux";
import { updateWorkout } from "../features/workouts/WorkoutsSlice";
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
  exitModal,
}) => {
  const dispatch = useDispatch();
  //const workouts = useSelector(selectWorkouts);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const exercisesFromServer = useSelector(selectExercises);
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [isUpdated, setIsUpdated] = useState(false);

  const addExercise = (id) => {
    // Find the exercise with the given id in the exercisesFromServer array
    const exercise = exercisesFromServer.find((exercise) => exercise.id === id);
    console.log(exercise);

    // Update the state of the exercises arrays
    setExercises([...exercises, exercise]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id: id,
      workoutId: workout._id,
      name: name,
      description: description,
      exercises: exercises.map((exercise) => {
        console.log(exercise);
        return {
          name: exercise.name,
          bodyPart: exercise.bodyPart,
          target: exercise.target,
          equipment: exercise.equipment,
          animatedGif: exercise.animatedGif || exercise.gifUrl,
        };
      }),
      reps,
    };
    console.log(data);

    //https://fitness-api.onrender.com
    axios
      .patch(
        `https://fitness-api.onrender.com/api/v1/user/workouts&exercises`,
        data,
        {
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      )
      .then((response) => {
        dispatch(updateWorkout(data));
        console.log(response.response);
        setMessage("Workout updated successfully!");
        setIsUpdated(true);
        //exitModal();
      })
      .catch((err) => {
        setMessage(err.response);
      });
  };

  // Set the initial state of the input fields with the values from the current workout object
  useEffect(() => {
    setName(workout.name);
    setDescription(workout.description);
    setExercises(workout.exercises);
    setReps(workout.reps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workout]);

  const toggleModalExercises = () => {
    setModalIsOpen(!modalIsOpen);
  };
  //console.log(workout);

  return (
    <div className="px-10 md:px-52 pt-3 w-full">
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
            <form onSubmit={handleSubmit}>
              <label className="block text-gray-200  font-bold text-xl mb-2">
                Nome:
              </label>
              <input
                className="border opacity-70 h-8 focus:opacity-100 rounded-xl p-2 w-full"
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
                <ExercisesCardWorkouts key={exercise._id} exercise={exercise} />
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
                onSubmit={handleSubmit}
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
