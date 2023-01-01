import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkouts, seeAllWorkouts } from "./WorkoutsSlice";
import Loading from "../../UI/Loading";

const SeeAllWorkouts = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(selectWorkouts);
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const isLoading = useSelector((state) => state.workouts.isLoading);

  //console.log(id, userAccessToken, workouts);

  //https://fitness-api.onrender.com
  const serverWorkouts = () => {
    axios
      .get(
        `https://fitness-api.onrender.com/api/v1/user/workouts&exercises?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      )
      .then((response) => {
        // do something with the response here, like dispatch an action to update the state
        //console.log(response.data);
        dispatch(seeAllWorkouts({ workouts: response.data }));
      })
      .catch((error) => {
        // handle the error here
        console.log(error);
      });
  };

  useEffect(() => {
    serverWorkouts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="px-4 pt-3 w-full">
      {isLoading ? (
        <Loading />
      ) : workouts.length === 0 ? (
        <p className="text-center text-gray-500">No workouts to display</p>
      ) : (
        workouts.map((workout) => (
          <div
            key={workout._id}
            className="my-4 py-4 flex items-center bg-blue-400 opacity-40 hover:opacity-70 rounded-lg shadow-lg transition-all duration-400 ease-in-out"
          >
            <div className="mx-8 flex w-1/3 flex-col items-center">
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
            <div className="hover:opacity-100 flex w-full overflow-scroll no-scrollbar">
              {workout.exercises.map((exercise, index) => (
                <div
                  className="bg-white m-1 mx-2 w-36 h-48 flex flex-col text-center shadow-xl rounded-xl p-2"
                  key={exercise._id}
                >
                  <p className="font-bold w-32 text-sm truncate overflow-hidden hover:text-clip">
                    {exercise.name}
                  </p>
                  <img
                    src={exercise.animatedGif}
                    alt={exercise.name}
                    className="w-h-auto h-auto m-auto object-cover rounded-2xl hover:opacity-100"
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
