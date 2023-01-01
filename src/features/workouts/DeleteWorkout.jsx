import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteWorkout } from "./WorkoutsSlice";

const DeleteWorkout = () => {
  const workouts = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [message, setMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (workoutId) => {
    const data = {
      id: id,
      workoutId: workoutId,
    };

    // send a DELETE request to the server to delete the workout from the database
    //https://fitness-api.onrender.com
    axios
      .delete(
        `https://fitness-api.onrender.com/api/v1/user/workouts&exercises/workouts/?workoutsId=${workouts}`,
        {
          data,
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      )
      .then((response) => {
        // if the workout was successfully deleted from the database, dispatch an action to delete it from the state
        dispatch(deleteWorkout({ workoutId }));
        setMessage("Workout apagado com sucesso!");
        setIsDeleted(true);
      })
      .catch((error) => {
        // handle the error here
        console.log(error);
      });
  };

  return (
    <div className="px-4 pt-3 w-full">
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
            className="my-4 py-4 flex items-center bg-blue-400 opacity-40 hover:opacity-70 rounded-lg shadow-lg transition-all duration-400 ease-in-out"
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
