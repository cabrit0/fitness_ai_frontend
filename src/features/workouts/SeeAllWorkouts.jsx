import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkouts, seeAllWorkouts } from "./WorkoutsSlice";

const SeeAllWorkouts = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(selectWorkouts);
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  console.log(id, userAccessToken);

  const idServer = {id}; // testar isto!! esta merda nao esta a renderizar! erro de servidor, User not found

  const serverWorkouts = () => {
    axios
      .get("https://fitness-api.onrender.com/api/v1/user/workouts&exercises", {
        headers: {
          Authorization: "Bearer " + userAccessToken,
        },
        params: idServer,
      })
      .then((response) => {
        // do something with the response here, like dispatch an action to update the state
        console.log(response);
        dispatch(seeAllWorkouts(response.data));
      })
      .catch((error) => {
        // handle the error here
        console.log(error);
      });
  };

  serverWorkouts();
  return (
    <div className="px-4 pt-3 w-full">
      {workouts.length === 0 ? (
        <p className="text-center text-gray-500">No workouts to display</p>
      ) : (
        workouts.map((workout) => (
          <div
            key={workout.id}
            className="my-4 py-4 flex items-center bg-blue-400 opacity-40 hover:opacity-70 rounded-lg shadow-lg transition-all duration-400 ease-in-out overflow-x-hidden"
          >
            <div className="mx-8 flex flex-col items-center">
              <h2 className="text-2xl text-white font-bold mb-2">
                {workout.name}
              </h2>
              <p className="text-gray-700 mb-4 text">{workout.description}</p>
              <p className="text-gray-700 text-2xl mb-4">
                Repetições <span className="">{workout.reps}</span>
              </p>
            </div>
            <div className="hover:opacity-100 w-full flex overflow-x-scroll">
              {workout.exercises.map((exercise, index) => (
                <div
                  className="bg-white m-1 w-60 flex flex-col items-center shadow-xl rounded-xl p-2 "
                  key={exercise.id}
                >
                  <p className="font-bold">{exercise.name}</p>
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    className="w-20 h-20 m-auto object-cover rounded-2xl hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SeeAllWorkouts;
