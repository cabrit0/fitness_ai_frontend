import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("Utilizador");
  const [sexo, setSexo] = useState("Masculino");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestCompleted, setRequestCompleted] = useState(false);

  const createNewUser = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setErrorMessage("As senhas não correspondem.");
      setPasswordValid(false);
      return;
    }
    if (password.length < 8) {
      setErrorMessage("A senha deve ter pelo menos 8 caracteres.");
      setPasswordValid(false);
      return;
    } else {
      setErrorMessage("");
      setPasswordValid(true);
    }

    const userData = {
      username: username,
      password: password,
      roles: roles,
      email: email,
      altura: altura,
      peso: peso,
      sexo: sexo,
      idade: idade,
    };

    console.log(userData);

    try {
      const { API_ENDPOINTS } = await import("../../config/api");

      const response = await axios.post(
        API_ENDPOINTS.USERS,
        userData
      );
      setRequestCompleted(true);
      console.log(response.data);
      setUsername("");
      setPassword("");
      setRepeatPassword("");
      setEmail("");
      setRoles("");
      setAltura("");
      setPeso("");
      setSexo("");
      setIdade("");
      setErrorMessage("");
    } catch (error) {
      console.error("Erro ao criar utilizador:", error);
      setErrorMessage("Erro ao criar utilizador");
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-gray-300 text-lg font-bold text-center">
        Criar novo usuário
      </h2>
      {!passwordValid && (
        <p className="text-center text-red-600 text-md font-bold mb-2">
          {errorMessage}
        </p>
      )}
      {requestCompleted && (
        <p className="text-center text-green-600 text-md font-bold mb-2">
          Usuário criado com sucesso!
        </p>
      )}
      <form
        className="bg-inherit shadow-md rounded px-8 py-2 mb-4 flex flex-col my-2 mx-auto w-full md:w-1/2 lg:w-1/3"
        onSubmit={createNewUser}
      >
        <div className="mb-4">
          <label
            className="block ml-4 text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Nome de usuário
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
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block ml-4 text-gray-300 text-sm font-bold mb-2"
            htmlFor="repeatPassword"
          >
            Repetir senha
          </label>
          <input
            className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
            id="repeatPassword"
            type="password"
            placeholder="Repetir senha"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
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
        <div className="flex">
          <div className="mb-4 mr-1">
            <label
              className="block ml-4 text-gray-300 text-sm font-bold mb-2"
              htmlFor="altura"
            >
              Altura
            </label>
            <input
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="altura"
              type="number"
              placeholder="Altura(Cm)"
              value={altura}
              onChange={(event) => setAltura(event.target.value)}
            />
          </div>
          <div className="mb-4 mx-1">
            <label
              className="block ml-4 text-gray-300 text-sm font-bold mb-2"
              htmlFor="peso"
            >
              Peso
            </label>
            <input
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="peso"
              type="number"
              placeholder="Peso(Kg)"
              value={peso}
              onChange={(event) => setPeso(event.target.value)}
            />
          </div>
          <div className="mb-4 ml-1">
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
        <div className="flex">
          <div className="mb-4 mr-1">
            <label
              className="block ml-4 text-gray-300 text-sm font-bold mb-2"
              htmlFor="roles"
            >
              Função
            </label>
            <select
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="roles"
              value={roles}
              onChange={(event) => setRoles(event.target.value)}
            >
              <option value="Utilizador">Utilizador</option>
              <option value="Personal Trainer">Personal Trainer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-4 ml-1">
            <label
              className="block ml-4 text-gray-300 text-sm font-bold mb-2"
              htmlFor="sexo"
            >
              Sexo
            </label>
            <select
              className="w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl focus:scale-105 transition-all duration-300 ease-in-out"
              id="sexo"
              value={sexo}
              onChange={(event) => setSexo(event.target.value)}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="flex mx-2 items-center font-bold py-1 my-4 px-4 justify-center md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-green-600 hover:scale-105 rounded-xl"
            type="submit"
          >
            Criar usuário
          </button>
          <button
            className="flex mx-2 items-center font-bold py-1 my-4 px-4 justify-center md:mx-6 bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-red-600 hover:scale-105 rounded-xl"
            type="button"
            onClick={() => {
              setUsername("");
              setPassword("");
              setRepeatPassword("");
              setEmail("");
              setRoles("");
              setAltura("");
              setPeso("");
              setSexo("");
              setIdade("");
              setErrorMessage("");
              setPasswordValid(true);
            }}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
