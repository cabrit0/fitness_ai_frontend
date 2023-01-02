import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkouts } from "../workouts/WorkoutsSlice";
import { createUserWorkout } from "../calendar/calendarSlice";

function FullCalendar() {
  const [dateValue, setDateValue] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const userWorkouts = useSelector(selectWorkouts);
  const dispatch = useDispatch();

  const handleDayClick = (event) => {
    const clickedDate = event;
    setDateValue(moment(clickedDate).toDate());
    setShowModal(true);
  };
  console.log(moment(dateValue).format("DD/MM/YYYY"));

  const renderWorkoutMarker = (date) => {
    const workout = userWorkouts.find((workout) => {
      return moment(workout.calendarDate).isSame(date, "day");
    });

    if (workout) {
      return <div className="workout-marker">{workout.name}</div>;
    }
  };

  const closeModal = () => {
    // Close modal when user clicks the 'close' button
    setShowModal(false);
  };

  const assignWorkout = (workoutId) => {
    // Assign workout to the clicked day here
    console.log(dateValue, workoutId);
    dispatch(
      createUserWorkout({
        calendarDate: dateValue.toISOString(),
        workoutId: workoutId._id,
      })
    );
    //closeModal(); // Close modal after workout is assigned
  };

  const CalendarWorkoutCards = ({
    userWorkouts,
    assignWorkout,
    setCurrentWorkout,
  }) => {
    const handleWorkoutClick = (workout) => {
      setCurrentWorkout(workout);
      //console.log(workout._id, currentWorkout);
      assignWorkout(currentWorkout);
    };

    return (
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
    );
  };

  return (
    <div>
      <Calendar
        className="calendar mx-8 md:mx-64"
        onChange={handleDayClick}
        onClickDay={handleDayClick}
        value={dateValue}
        tileContent={renderWorkoutMarker}
      />
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-t-50">
          <div className=" rounded p-4 bg-gray-300 w-11/12 h-11/12 opacity-100">
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
                className="bg-blue-500 rounded-2xl mx-1 opacity-75 hover:opacity-100 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={assignWorkout}
              >
                Associar workout
              </button>
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
      )}
    </div>
  );
}

export default FullCalendar;
