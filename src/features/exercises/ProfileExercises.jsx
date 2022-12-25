import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExercises,
  viewAllExercises,
  selectRandomExercises,
  selectIsLoading,
} from "./exercisesSlice";
import ExerciseCard from "./ExerciseCard";
import FilterMenu from "../../UI/FilterMenu";
import Loading from "../../UI/Loading";

const ProfileExercises = () => {
  const exerciseContainerRef = useRef(null);
  const dispatch = useDispatch();
  const exercises = useSelector(selectRandomExercises);
  const isLoading = useSelector(selectIsLoading);

  const [filteredExercises, setFilteredExercises] = useState();
  const [isAllExercises, setIsAllExercises] = useState(false);

  const handleViewAllExercises = () => {
    setIsAllExercises(true);
    dispatch(viewAllExercises());
    exerciseContainerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFilterChange = (filteredExercises) => {
    setFilteredExercises(filteredExercises);
  };

  const handleBackButton = () => {
    setIsAllExercises(false);
    setFilteredExercises(null);
    dispatch(fetchExercises());
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  console.log(isLoading);

  return (
    <div>
      {!isLoading ? (
        <>
          <div
            className="flex flex-wrap justify-center mt-12 px-16 lg:px-52 no-scrollbar"
            ref={exerciseContainerRef}
          >
            {isAllExercises && (
              <FilterMenu
                exercises={exercises}
                onFilterChange={handleFilterChange}
                backButtonHandler={handleBackButton}
              />
            )}
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
        </>
      ) : (
        <div className="w-100 h-100 mt-20 text-5xl">
          <Loading className="" />
        </div>
      )}
    </div>
  );
};

export default ProfileExercises;
