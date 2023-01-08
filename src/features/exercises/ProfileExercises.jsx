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
  const allExercises = useSelector(selectExercises);

  const [filteredExercises, setFilteredExercises] = useState(null);
  const [isAllExercises, setIsAllExercises] = useState(false);
  const [isNoResultsFound, setIsNoResultsFound] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const maxPages = Math.ceil(allExercises.length / pageSize);

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

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);
  return (
    <>
      {isAllExercises ? (
        <h2
          className="text-gray-300 text-center text-xl font-bold pt-6"
          ref={exerciseContainerRef}
        >
          Todos Exercícios
        </h2>
      ) : (
        <h2
          className="text-gray-300 text-center text-xl font-bold"
          ref={exerciseContainerRef}
        >
          Exercícios
        </h2>
      )}
      <div className="no-scrollbar pb-10">
        {!isLoading ? (
          <>
            <div className="flex flex-wrap justify-center mt-8 px-16 lg:px-52 no-scrollbar">
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
                filteredExercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))
              ) : (
                allExercises
                  .slice((page - 1) * pageSize, page * pageSize)
                  .map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                  ))
              )}
              {!isAllExercises && (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-gray-200 font-bold opacity-70 rounded-2xl m-auto py-1 px-4 focus:outline-none hover:scale-110 hover:opacity-100 duration-300 ease-in-out"
                  onClick={handleViewAllExercises}
                >
                  Todos os Exercícios
                </button>
              )}
            </div>
            {isAllExercises && (
              <div className="flex justify-between items-center md:mx-80 px-12 py-4">
                <button
                  className={`bg-transparent hover:bg-blue-600 bg-blue-500 text-gray-300 font-semibold hover:text-white hover:scale-110 py-2 px-4 border border-blue-500 hover:border-transparent rounded-l-2xl duration-300 ease-in-out ${
                    page === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}
                >
                  Anterior
                </button>
                <p className="text-gray-300 font-bold text-xl">
                  Página <span className="text-blue-600">{page}</span> - <span className="text-blue-600">{maxPages}</span>
                </p>
                <button
                  className={`bg-transparent hover:bg-blue-600 bg-blue-500 text-gray-300 font-semibold hover:text-white hover:scale-110 py-2 px-4 border border-blue-500 hover:border-transparent rounded-r-2xl duration-300 ease-in-out ${
                    page === maxPages ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={page === maxPages}
                  onClick={() => handlePageChange(page + 1)}
                >
                  Próximo
                </button>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ProfileExercises;
