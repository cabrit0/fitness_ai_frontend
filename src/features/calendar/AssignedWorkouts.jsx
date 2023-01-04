import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserCalendarWorkouts,
  removeUserWorkout,
  fetchCalendarWorkouts,
} from "../calendar/calendarSlice";

const AssignedWorkouts = () => {
  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const assignedWorkouts = useSelector(selectUserCalendarWorkouts);
  const [fetchedWorkouts, setFetchedWorkouts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const fetchData = async () => {
      const workouts = await dispatch(
        fetchCalendarWorkouts(id, userAccessToken)
      );
      setFetchedWorkouts(workouts);
    };
    fetchData();
  }, [assignedWorkouts]);

  // Function to open the modal and set the workout id
  const handleDelete = (id) => {
    setIsModalOpen(true);
    setWorkoutId(id);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Function to dispatch the removeUserWorkout action and close the modal
  const handleConfirm = async () => {
    console.log(id, workoutId);
    try {
      await axios.delete(
        "https://fitness-api.onrender.com/api/v1/user/calendarOptions/removeWorkout",
        {
          data: {
            id: id,
            workoutId: workoutId,
          },
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      );

      // Dispatch the removeUserWorkout action and close the modal
      dispatch(removeUserWorkout(workoutId));
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isModalOpen ? (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-70">
          <div className="modal-container rounded p-4 bg-gray-300 w-11/12 h-11/12 opacity-100">
            <div className="px-6 py-20">
              <p className="font-bold text-gray-700 text-center p-4">
                Deseja remover este Workout do calendario?
              </p>
              <div className="modal-buttons flex items-center justify-center">
                <button
                  className="mx-2 bg-red-500 rounded-2xl opacity-75  hover:opacity-100 text-white py-1 px-4 focus:outline-none focus:shadow-outline"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  className="mx-2 bg-blue-500 rounded-2xl opacity-75  hover:opacity-100 text-white py-1 px-4 focus:outline-none focus:shadow-outline"
                  onClick={handleConfirm}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-8 md:px-48 py-2">
          <h3 className="text-2xl text-gray-300 font-bold mb-4">
            Workouts no calendario
          </h3>
          <div className="flex flex-col space-y-2">
            {fetchedWorkouts.length === 0 ? (
              <div className="text-center text-gray-600">
                Sem workouts para mostrar...
              </div>
            ) : (
              fetchedWorkouts.map((workout) => {
                // Parse the calendarDate string into a Date object
                const workoutDate = new Date(workout.calendarDate);
                return (
                  <div
                    key={workout._id}
                    className="flex justify-between px-4 py-2 rounded-lg bg-gray-200 opacity-70 hover:opacity-100 cursor-pointer"
                    onClick={() => handleDelete(workout._id)}
                  >
                    <div className="flex items-center text-2xl font-bold text-blue-400">
                      {workout.name}
                    </div>
                    <div className="flex items-center pr-6 text-sm font-bold text-center text-gray-600">
                      {workoutDate.toLocaleDateString("pt-PT", options)}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AssignedWorkouts;
