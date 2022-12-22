import React from "react";

const GymDescriptionBanner = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-5 mx-7">
      <div className="text-center text-gray-300 text-lg mt-4">
        Nossa academia é a melhor da cidade, com equipamentos de última geração
        e instrutores experientes para ajudá-lo a alcançar seus objetivos de
        condicionamento físico. Oferecemos uma variedade de aulas e sessões de
        treinamento pessoal.
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-gray-600 py-2 px-4 rounded-full text-white mr-4">
          More Info
        </button>
        <button className="bg-gray-600 py-2 px-4 rounded-full text-white">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default GymDescriptionBanner;
