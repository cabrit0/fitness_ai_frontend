import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkouts } from "../workouts/WorkoutsSlice";
import {
  createUserWorkout,
  fetchCalendarWorkouts,
} from "../calendar/calendarSlice";

function FullCalendar() {
  const dispatch = useDispatch();
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [dateValue, setDateValue] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const userWorkouts = useSelector(selectWorkouts);
  const userAssignedWorkouts = useSelector(() =>
    fetchCalendarWorkouts(id, userAccessToken)
  );
  console.log(userAssignedWorkouts);
  
  const getTileClassName = (date) => {
    if (userAssignedWorkouts.includes((date))) {
      return "workout-day";
    }
    return "";
  };
  
    const handleDayClick = (event) => {
      const clickedDate = event;
      setDateValue(moment(clickedDate).toDate());
      setShowModal(true);
    };
    console.log(moment(dateValue).format("DD/MM/YYYY"));
  
  /* useEffect(() => {
    getTileClassName();
    //console.log('hey')
  }, []); */

  const closeModal = () => {
    // Close modal when user clicks the 'close' button
    setShowModal(false);
  };

  const assignWorkout = (workout) => {
    // Assign workout to the clicked day here
    console.log(dateValue, workout);

    const data = {
      id: id,
      workoutId: workout._id,
      calendarDate: dateValue.toISOString(),
    };

    axios
      .post(
        "http://localhost:3500/api/v1/user/calendarOptions/assignWorkout",
        data,
        {
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          createUserWorkout({
            calendarDate: dateValue.toISOString(),
            workoutId: workout._id,
          })
        );
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const CalendarWorkoutCards = ({ userWorkouts, assignWorkout }) => {
    const [displayWorkouts, setDisplayWorkouts] = useState(true);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    //console.log(selectedWorkout);

    const handleAssignWorkout = (event, workout) => {
      event.preventDefault();
      assignWorkout(workout);
    };

    const handleWorkoutClick = (workout) => {
      setSelectedWorkout(workout);
      setDisplayWorkouts(false);
    };

    const handleBackClick = () => {
      setSelectedWorkout(null);
      setDisplayWorkouts(true);
    };

    return (
      <>
        {displayWorkouts ? (
          <div className="flex flex-wrap mx-5 opacity-70 rounded-lg my-4 items-start justify-start md:justify-center">
            {userWorkouts.map((workout) => (
              <div
                key={workout._id}
                className={`w-28 m-1 rounded-2xl bg-blue-500 hover:bg-gray-200 mx-0.5 p-4 cursor-pointer`}
                onClick={() => handleWorkoutClick(workout)}
              >
                <div className="flex items-center h-20">
                  <h3 className="text-lg font-bold text-gray-900  overflow-hidden text-center">
                    {workout.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 h-full">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              {selectedWorkout.name}
            </h3>
            <p className="">{selectedWorkout.description}</p>
            <p className="text-blue-500 text-xl">
              Reps: {selectedWorkout.reps}
            </p>
            <button
              className="px-2 mt-2 mb-4 font-bold bg-transparent hover:bg-red-500 text-red-500 hover:text-white border border-red-500 hover:border-transparent rounded-2xl"
              onClick={handleBackClick}
            >
              Voltar
            </button>
            <button
              className="bg-blue-500 rounded-2xl opacity-75 hover:opacity-100 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => handleAssignWorkout(e, selectedWorkout)}
            >
              Associar workout
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <Calendar
      className="calendar mx-8 md:mx-64"
        /* tileClassName={getTileClassName} */
        onChange={handleDayClick}
        onClickDay={handleDayClick}
        value={dateValue}
      />
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className=" rounded p-4 bg-gray-300 w-11/12 h-11/12 opacity-100">
            <div>
              <p className="p-6 text-center text-blue-700 font-bold">
                Data escolhida:
                <span className="text-gray-900">
                  {"\t" + moment(dateValue).format("DD/MM/YYYY")}
                </span>
              </p>
              <CalendarWorkoutCards
                userWorkouts={userWorkouts}
                assignWorkout={assignWorkout}
                setCurrentWorkout={setCurrentWorkout}
              />
              <div className="flex justify-center">
                <button
                  className="bg-red-500 rounded-2xl mx-1 opacity-75  hover:opacity-100 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={closeModal}
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullCalendar;
