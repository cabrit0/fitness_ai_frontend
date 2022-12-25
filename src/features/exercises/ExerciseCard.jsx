const ExerciseCard = ({ exercise }) => (
  <div className="w-full sm:w-1/3 px-2 p-4 sm:mx-auto">
    <div className="bg-white text-gray-700 opacity-70 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:border-transparent hover:scale-105 hover:opacity-100 rounded-lg shadow-lg overflow-hidden">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="w-20 h-w-20 mx-auto pt-4 object-cover"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {exercise.name}
        </h2>
        <p className="text-gray-600 text-sm">
          Target: {exercise.target} | Body part: {exercise.bodyPart} |
          Equipment: {exercise.equipment}
        </p>
      </div>
      <div className="px-6 md:px-2 pt-4 text-white opacity-70 focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:border-transparent hover:opacity-100">
        <button className="bg-blue-500 mb-1 p-3 items-end rounded-t-2xl rounded-b-md block h-full w-full transition-all duration-300 ease-in-out hover:scale-125 overflow-hidden">
          Começar exercicío
        </button>
      </div>
    </div>
  </div>
);

export default ExerciseCard;
