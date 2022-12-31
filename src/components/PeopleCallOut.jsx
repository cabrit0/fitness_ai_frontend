import React from "react";

const PeopleCallOut = () => {
  return (
    <div className="bg-gray-800 mx-12 my-14 py-8 text-center text-white rounded-xl">
      <h2 className="text-3xl font-bold leading-tight">
        <span className="text-gray-500">Ginásio</span>
        <span className="text-gray-100">Albi</span>
      </h2>
      <p className="mt-4 text-xl font-light leading-relaxed">
        Mais do que uma academia, é um <br />
        <span className="text-gray-500 font-bold">estilo de vida</span>.
      </p>
      <p className="mt-4 text-gray-100 font-light px-8">
        Com aulas dinâmicas e inovadoras, oferecemos a você uma experiência
        única de exercícios e bem-estar. Não importa qual é o seu objetivo de
        fitness, aqui você encontrará o ambiente perfeito para alcançá-lo. Não
        perca mais tempo e agende já sua visita. Te esperamos no Ginásio Albi
        com todo o carinho e profissionalismo que só nós podemos oferecer!
      </p>
      <button
        className="bg-gray-600 text-md mt-8 py-3 px-8 font-bold shadow-lg rounded-full text-white mr-4 "
      >
        Agende sua visita
      </button>
    </div>
  );
};

export default PeopleCallOut;
