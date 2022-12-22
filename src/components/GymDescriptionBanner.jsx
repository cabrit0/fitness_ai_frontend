import React from "react";

const GymDescriptionBanner = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg lg:mx-20 mt-5 mx-7">
      <div className="text-center text-gray-300 text-lg mt-4">
        Nosso ginásio é o melhor da cidade, com equipamentos de última geração e
        instrutores experientes para ajudá-lo a alcançar seus objetivos de
        condicionamento físico com aulas e sessões de treinamento pessoal.
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-gray-600 py-1 px-4 rounded-full text-white mr-4 transition-transform duration-200 transform hover:-translate-y-0.5 hover:scale-110">
          Mais Informação
        </button>
        <button className="bg-gray-600 py-1 px-4 rounded-full text-white transition-transform duration-200 transform hover:-translate-y-0.5 hover:scale-110">
          Entra em contacto
        </button>
      </div>
    </div>
  );
};

export default GymDescriptionBanner;
