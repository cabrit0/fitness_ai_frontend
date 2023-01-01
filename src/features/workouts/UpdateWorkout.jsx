import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateWorkout, selectWorkouts, setWorkout } from "./WorkoutsSlice";
import ModalWorkoutUpdate from "../../components/ModalWorkoutUpdate";

const UpdateWorkout = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(selectWorkouts);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([]);
  const [reps, setReps] = useState("");
  const currentWorkout = useSelector((state) => state.workouts.currentWorkout);
  const [message, setMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [current, setCurrent] = useState(currentWorkout);

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedWorkout = {
      id: currentWorkout.id,
      name,
      description,
      exercises,
      reps,
    };

    dispatch(updateWorkout({ workout: updatedWorkout }));
  };

  const toggleModal = (workout) => {
    dispatch(setWorkout(workout));
    setModalIsOpen(!modalIsOpen);
    console.log(workout);
    console.log(currentWorkout);
  };

  return (
    <div className="px-10 pt-3 w-full">
      {modalIsOpen ? (
        <ModalWorkoutUpdate
          workout={currentWorkout}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          exercises={exercises}
          setExercises={setExercises}
          reps={reps}
          setReps={setReps}
          message={message}
          setMessage={setMessage}
          isUpdated={isUpdated}
          handleUpdate={handleUpdate}
          exitModal={toggleModal}
        />
      ) : (
        <>
          <div className="px-4 pt-3 w-full">
            {isUpdated ? (
              <p className="text-center text-2xl font-bold text-gray-200">
                {message}
              </p>
            ) : workouts.length === 0 ? (
              <p className="text-center text-gray-500">
                No workouts to display
              </p>
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
                    className="px-4 py-2 mx-4 bg-blue-700 opacity-70 hover:opacity-100 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
                    onClick={() => toggleModal(workout)}
                  >
                    Editar
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateWorkout;
