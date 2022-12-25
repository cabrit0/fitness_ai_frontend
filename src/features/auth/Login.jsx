import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess, loginError } from "./loginSlice";
import Loading from "../../UI/Loading";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector( state => state.login.loading)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
      ) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (name === "password") {
      setPassword(value);
      if (value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginRequest());
    //loginRequest.loading = false;
    console.log(loading)
    
    axios
      .post("https://fitness-api.onrender.com/api/v1/auth", {
        email,
        password,
      })
      .then((response) => {
        // Redirect the user to the home page or display a success message
        //console.log(response);
        dispatch(loginSuccess(response.data));
        setIsLoginModalOpen(prev => !prev)
        navigate("/user");
      })
      .catch((error) => {
        setError(error);
        //console.log(error.message);
        setError('Credenciais inválidas ou user não encontrado')
        dispatch(loginError(error.message))
      });
  };

  return (
    <div
      className={`absolute overflow-y-${isLoginModalOpen} bg-gray-600 w-full bg-opacity-60 h-screen flex items-center justify-center z-50`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-gray-600 font-bold text-lg p-3">
          Faz login para entrar na app
        </h2>
        {error && (
          <p className="text-sm px-2 py-3 opacity-70 text-red-500 font-bold">
            {error}
          </p>
        )}

        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emailError ? "error" : ""
          }`}
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          name="email"
        />
        {emailError && (
          <p className="text-red-500 text-xs italic animate-bounce">
            Por favor insira um email válido
          </p>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              passwordError ? "error" : ""
            }`}
            id="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
            name="password"
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic animate-bounce">
              Password tem que ter pelo menos 8 caracteres
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            {!loading ? (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline transition-transform duration-200 transform hover:scale-110"
                type="submit"
                //disabled={loading || emailError || passwordError}
              >
                Login
              </button>
            ) : (
              <Loading/>
            )}
            <button
              className="  text-white font-bold px-5 py-3focus:outline-none focus:shadow-outline"
              onClick={props.backModalButton}
            >
              <FiArrowLeftCircle className="text-gray-500 text-2xl hover:text-gray-700 transition-transform duration-200 transform hover:scale-110" />
            </button>
          </div>
          <a
            className="inline-block align-baseline font-bold text-xs text-gray-500 hover:text-gray-800"
            href="www.google.com"
          >
            Esqueceste a password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
