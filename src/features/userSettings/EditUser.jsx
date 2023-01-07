import React, { useState } from "react";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <div className="py-8">
      <h2 className="text-gray-300 text-lg font-bold text-center">
        Editar meus dados
      </h2>
      <form className="bg-inherit shadow-md rounded px-8 py-2 mb-4 flex flex-col my-2 mx-auto w-full md:w-1/2 lg:w-1/3">
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Nome
          </label>
          <input
            className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
            id="username"
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="sexo"
          >
            Sexo
          </label>
          <input
            className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
            id="sexo"
            type="text"
            placeholder="Sexo"
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-4 mr-2">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="peso"
            >
              Peso(kg)
            </label>
            <input
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="peso"
              type="number"
              placeholder="Peso"
              value={peso}
              onChange={(event) => setPeso(event.target.value)}
            />
          </div>
          <div className="mb-4 mx-2">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="altura"
            >
              Altura(cm)
            </label>
            <input
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="altura"
              type="number"
              placeholder="Altura"
              value={altura}
              onChange={(event) => setAltura(event.target.value)}
            />
          </div>
          <div className="mb-4 ml-2">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="idade"
            >
              Idade
            </label>
            <input
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="idade"
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(event) => setIdade(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex items-center font-bold py-1 my-4 px-4 justify-center md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 hover:scale-105 rounded-xl"
            type="button"
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;