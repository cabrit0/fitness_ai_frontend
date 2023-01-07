import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateUser, refreshUser } from "./userSettingsSlice";

const EditUser = () => {
  const user = useSelector((state) => state.login.user.foundUser);
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [isUpdated, setIsUpdated] = useState(false);
  const userAccessToken = useSelector((state) => state.login.user.accessToken);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [sexo, setSexo] = useState(user.sexo);
  const [peso, setPeso] = useState(user.peso);
  const [altura, setAltura] = useState(user.altura);
  const [idade, setIdade] = useState(user.idade);
  const dispatch = useDispatch();

  const updateCurrentUser = async (e) => {
    e.preventDefault();

    const userData = {
      id: id,
      username: username,
      roles: user.roles,
      active: user.active,
      personalTrainer: user.personalTrainer,
      sexo: sexo,
      peso: peso,
      altura: altura,
      idade: idade,
    };

    try {
      const response = await axios.patch(
        "https://fitness-api.onrender.com/api/v1/users",
        userData
      );
      dispatch(updateUser(userData));
      dispatch(refreshUser(id));
      setIsUpdated(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-8">
      {isUpdated ? (
        <>
          <p className="text-gray-300 text-center text-xl font-bold">
            User foi atualizado com sucesso!
          </p>
          <p className="text-gray-400 text-center text-md font-bold">
            Por favor reinicie a aplicação para aplicar mudanças
          </p>
        </>
      ) : (
        <>
          <h2 className="text-gray-300 text-lg font-bold text-center">
            Editar meus dados
          </h2>
          <form
            className="bg-inherit shadow-md rounded px-8 py-2 mb-4 flex flex-col my-2 mx-auto w-full md:w-1/2 lg:w-1/3"
            onSubmit={updateCurrentUser}
          >
            <div className="mb-4">
              <label
                className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
                className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
                className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
                  className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
                  className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
                  className="block ml-4 text-gray-300 text-sm font-bold mb-2"
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
            <div className="flex items-center">
              <button className="flex items-center font-bold py-1 my-4 px-4 justify-center md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 hover:scale-105 rounded-xl">
                Atualizar
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditUser;
