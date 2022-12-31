const ExerciseCard = ({ exercise }) => {
  return (
    <div className=" py-4">
      <div className="bg-white w-80 h-30 text-gray-700 opacity-70 flex justify-center items-center focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out hover:border-transparent hover:scale-105 hover:opacity-100 rounded-lg shadow-lg overflow-hidden">
        <div className="w-50">
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-20 h-20 m-auto object-cover"
          />
        </div>
        <div className="px-6 w-50 py-4 h-full">
          <h2 className="text-md font-bold text-gray-900 leading-tight">
            {exercise.name}
          </h2>
          <p className="text-gray-600 text-sm">
            Músculo: {exercise.target} | Parte do corpo: {exercise.bodyPart} |
            Equipamento: {exercise.equipment}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExerciseCard;
