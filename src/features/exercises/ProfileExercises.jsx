import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExercises,
  viewAllExercises,
  selectRandomExercises,
  selectIsLoading,
  selectExercises,
} from "./exercisesSlice";
import ExerciseCard from "./ExerciseCard";
import FilterMenu from "../../UI/FilterMenu";
import Loading from "../../UI/Loading";

const ProfileExercises = () => {
  const exerciseContainerRef = useRef(null);
  const dispatch = useDispatch();
  const exercises = useSelector(selectRandomExercises);
  const isLoading = useSelector(selectIsLoading);
/*   const allExercises = useSelector(selectExercises);
  console.log(allExercises) */

  const [filteredExercises, setFilteredExercises] = useState(null);
  const [isAllExercises, setIsAllExercises] = useState(false);
  const [isNoResultsFound, setIsNoResultsFound] = useState(false);
/*   const [currentpageResults, setCurrentPageResults] = useState(exercises.slice(0, 14));
  const [maxResults, setMaxResults] = useState(allExercises.length)
  
  console.log(currentpageResults, maxResults) */

  const handleViewAllExercises = () => {
    setIsAllExercises(true);
    dispatch(viewAllExercises());
    exerciseContainerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFilterChange = (filteredExercises) => {
    if (filteredExercises.length === 0) {
      setIsNoResultsFound(true);
    } else {
      setIsNoResultsFound(false);
    }

    setFilteredExercises(filteredExercises);
  };

  const handleBackButton = () => {
    setIsAllExercises(false);
    setFilteredExercises(null);
    setIsNoResultsFound(false);
    dispatch(fetchExercises());
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <>
      {isAllExercises ? (
        <h2
          className="text-gray-300 text-center text-xl font-bold pt-8"
          ref={exerciseContainerRef}
        >
          Todos Exercícios
        </h2>
      ) : (
        <h2
          className="text-gray-300 text-center text-xl font-bold pt-8"
          ref={exerciseContainerRef}
        >
          Top 6 Exercícios
        </h2>
      )}
      <div className="no-scrollbar">
        {!isLoading ? (
          <>
            <div className="flex flex-wrap justify-center mt-12 px-16 lg:px-52 no-scrollbar">
              {isAllExercises && (
                <FilterMenu
                  exercises={exercises}
                  onFilterChange={handleFilterChange}
                  backButtonHandler={handleBackButton}
                />
              )}
              {isNoResultsFound && filteredExercises !== null ? (
                <div className="text-center text-white opacity-75 w-full text-4xl mb-4 mt-12">
                  Nenhum resultado encontrado...
                </div>
              ) : filteredExercises ? (
                exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))
              ) : (
                exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))
              )}
              {!isAllExercises && (
                <button
                  className="bg-blue-500 my-3 hover:bg-blue-700 text-
  white font-bold py-2 px-4 rounded-full w-80 disabled:opacity-40"
                  onClick={handleViewAllExercises}
                >
                  Todos os exercícios
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="w-100 h-100 mt-20 text-5xl">
            <Loading className="" />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileExercises;
