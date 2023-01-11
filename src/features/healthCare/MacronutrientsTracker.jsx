import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser, selectCurrentUser } from "../userSettings/userSettingsSlice";

const MacronutrientTracker = () => {
  const dispatch = useDispatch();
 const user = useSelector((state) => state.login.user.foundUser);
  const [age, setAge] = useState(user.idade);
  const [weight, setWeight] = useState(user.peso);
  const [height, setHeight] = useState(user.altura);
  const [gender, setGender] = useState(user.sexo);
  const [activityFactor, setActivityFactor] = useState(1.2);
  const [carbs, setCarbs] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [goal, setGoal] = useState("Perder Peso");
  const [recommendation, setRecommendation] = useState("");

  const calculateBMR = () => {
    let bmr;
    if (gender === "male") {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
    return bmr;
  };

  const calculateTDEE = (bmr) => {
    return bmr * activityFactor;
  };

  const calculateRecommendation = () => {
    let bmr = calculateBMR();
    let tdee = calculateTDEE(bmr);
    let calories;
    if (goal === "Perder Peso") {
      calories = tdee - 500;
    } else if (goal === "Manter Peso") {
      calories = tdee;
    } else {
      calories = tdee + 500;
    }
    let proteinIntake = Math.round(weight * 2);
    let carbIntake = Math.round((calories * 0.5) / 4);
    let fatIntake = Math.round((calories * 0.3) / 9);
    setRecommendation(
      `Para atingir seu objetivo de ${goal}, você deve consumir aproximadamente ${calories.toFixed(
        0
      )} calorias por dia, incluindo ${proteinIntake}g de proteínas, ${carbIntake}g de carboidratos e ${fatIntake}g de gorduras.`
    );
  };

  return (
    <div className="py-6 px-5 mx-12 my-4 bg-gray-100 bg-opacity-20 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-100 my-4 text-center">
        Tracker de Nutrientes e Atividade
      </h2>
      {recommendation && (
        <div className="py-2 bg-gray-700  rounded-2xl">
          <h2 className="text-lg font-bold text-center text-gray-200 mb-2">
            Recomendação de macronutrientes:
          </h2>
          <p className="text-gray-400 text-lg text-center font-bold">
            {recommendation}
          </p>
        </div>
      )}
      <form className="flex flex-col md:flex-row md:justify-center text-center items-center">
        <div className="items-center md:mx-20">
          <label
            className="block text-gray-400 font-bold my-6"
            htmlFor="activityFactor"
          >
            Fator de atividade:
          </label>
          <select
            className="transition-all duration-300 ease-in-out focus:scale-105 w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2 rounded-2xl shadow-xl leading-tight focus:outline-none focus:shadow"
            value={activityFactor}
            onChange={(e) => setActivityFactor(e.target.value)}
          >
            <option className="rounded-2xl" value={1.2}>
              Sedentário
            </option>
            <option value={1.375}>Levemente ativo</option>
            <option value={1.55}>Moderadamente ativo</option>
            <option value={1.725}>Muito ativo</option>
            <option value={1.9}>Extremamente ativo</option>
          </select>

          <label className="block text-gray-400 font-bold my-6" htmlFor="goal">
            Objetivo:
          </label>
          <select
            className="transition-all duration-300 ease-in-out focus:scale-105 w-full bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2  rounded-2xl shadow-xl leading-tight focus:outline-none focus:shadow"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="Perder Peso">Perder peso</option>
            <option value="Manter Peso">Manter de peso</option>
            <option value="Ganhar Peso">Ganhar peso</option>
          </select>
        </div>
        <div className="text-center md:mx-20">
          <div>
            <label
              className="block text-gray-400 font-bold py-4"
              htmlFor="carbs"
            >
              Hid. Carbono (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 text-center py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 transition-all duration-300 ease-in-out focus:scale-105 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de carboidratos consumidos"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-400 font-bold py-4"
              htmlFor="proteins"
            >
              Proteínas (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 text-center py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 transition-all duration-300 ease-in-out focus:scale-105 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de proteínas consumidas"
              value={proteins}
              onChange={(e) => setProteins(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-400 font-bold py-4"
              htmlFor="fats"
            >
              Gorduras (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 text-center py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 transition-all duration-300 ease-in-out focus:scale-105 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de gorduras consumidas"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center py-6">
        <button
          onClick={calculateRecommendation}
          className="text-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold py-2 px-8 rounded-xl"
          type="button"
        >
          Calcular recomendação
        </button>
      </div>
    </div>
  );
};

export default MacronutrientTracker;
