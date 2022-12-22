import React from "react";
import img from "../assets/descriptionImg.png";

const GymDescriptionBanner = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg lg:mx-20 mt-14 mx-9 flex items-center lg:px-20">
      <img
        src={img}
        alt="Gym"
        className="h-48 w-48 md:block object-cover rounded-lg hidden"
      />
      <div>
        <div className="px-8 text-center text-gray-300 text-lg mt-4">
          Nosso ginásio é o melhor da cidade, com equipamentos de última geração
          e instrutores experientes para ajudá-lo a alcançar seus objetivos de
          condicionamento físico com aulas e sessões de treinamento pessoal.
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 py-1 px-4 text-sm rounded-full text-white mr-4 transition-transform duration-200 transform hover:-
translate-y-0.5 hover:scale-110"
          >
            Mais Informação
          </button>
          <button className="bg-gray-600 py-1 px-4 text-sm rounded-full text-white transition-transform duration-200 transform hover:-translate-y-0.5 hover:scale-110">
            Entra em contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymDescriptionBanner;
