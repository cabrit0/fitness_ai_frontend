import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises, viewAllExercises, selectRandomExercises } from "./exercisesSlice";
import ExerciseCard from "./ExerciseCard";

const ProfileExercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(selectRandomExercises);
  console.log(exercises);

  const handleViewAllExercises = () => {
    dispatch(viewAllExercises());
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center mt-12 px-16 lg:px-52 no-scrollbar">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
      <button
        className="bg-blue-500 my-3 hover:bg-blue-700 text-
white font-bold py-2 px-4 rounded-full w-80"
        onClick={handleViewAllExercises}
      >
        Todos os exercícios
      </button>
    </div>
  );
};


export default ProfileExercises;
