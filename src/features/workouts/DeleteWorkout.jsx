import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteWorkout } from "./WorkoutsSlice";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/api";

const DeleteWorkout = () => {
  const workouts = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [message, setMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (workoutId) => {
    const data = {
      id: id,
      workoutId: workoutId,
    };

    try {
      await axios.delete(
        `${API_ENDPOINTS.DELETE_WORKOUT}?workoutsId=${workouts}`,
        {
          data,
          headers: getAuthHeaders(userAccessToken),
        }
      );

      // if the workout was successfully deleted from the database, dispatch an action to delete it from the state
      dispatch(deleteWorkout({ workoutId }));
      setMessage("Workout apagado com sucesso!");
      setIsDeleted(true);
    } catch (error) {
      console.error("Erro ao apagar workout:", error);
      setMessage("Erro ao apagar workout");
    }
  };

  return (
    <div className="px-10 md:px-52 pt-3 w-full">
      {isDeleted ? (
        <p className="text-center text-2xl font-bold text-gray-200">
          {message}
        </p>
      ) : workouts.length === 0 ? (
        <p className="text-center text-gray-500">No workouts to display</p>
      ) : (
        workouts.map((workout) => (
          <div
            key={workout._id}
            className="my-4 py-4 flex items-center bg-blue-400 opacity-40 hover:opacity-70 rounded-2xl shadow-lg transition-all duration-400 ease-in-out"
          >
            <div className="mx-8 flex w-2/3 flex-col items-center">
              <h2 className="text-2xl text-white font-bold mb-2">
                {workout.name}
              </h2>
              <p className="text-gray-700 mb-4 text-md text">
                {workout.description}
              </p>
              <p className="text-gray-700 text-2xl mb-4">
                Repetições <span className="">{workout.reps}</span>
              </p>
            </div>
            <button
              className="px-4 py-2 mx-4 bg-red-500 opacity-70 hover:opacity-100 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
              onClick={() => handleDelete(workout._id)}
            >
              Apagar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DeleteWorkout;
