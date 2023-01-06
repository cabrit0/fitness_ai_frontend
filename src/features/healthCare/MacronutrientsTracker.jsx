import React, { useState } from "react";
import { useSelector } from "react-redux";

const MacronutrientTracker = () => {
  const user = useSelector((state) => state.login.user.foundUser);
  const [age, setAge] = useState(user.idade);
  const [weight, setWeight] = useState(user.peso);
  const [height, setHeight] = useState(user.altura);
  const [gender, setGender] = useState(user.sexo);
  const [activityFactor, setActivityFactor] = useState(1.2);
  const [carbs, setCarbs] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [goal, setGoal] = useState("weightLoss");
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
    if (goal === "weightLoss") {
      calories = tdee - 500;
    } else if (goal === "maintenance") {
      calories = tdee;
    } else {
      calories = tdee + 500;
    }
    let proteinIntake = Math.round(weight * 2);
    let carbIntake = Math.round((calories * 0.5) / 4);
    let fatIntake = Math.round((calories * 0.3) / 9);
    setRecommendation(
      `Para atingir seu objetivo de ${goal}, você deve consumir aproximadamente ${calories.toFixed(2)} calorias por dia, incluindo ${proteinIntake}g de proteínas, ${carbIntake}g de carboidratos e ${fatIntake.toFixed(0)}g de gorduras.`
    );
  };

  return (
    <div className="py-6 px-5 mx-12 my-4 bg-gray-100 bg-opacity-20 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">
        Tracker de Nutrientes e Atividade
      </h2>
      <form className="my-4">
        <div className="flex h-12 my-4 items-center justify-between">
          <label
            className="block text-gray-300 font-bold my-6"
            htmlFor="activityFactor"
          >
            Fator de atividade:
          </label>
          <select
            className="w-40 h-10 bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2  rounded-2xl shadow-xl leading-tight focus:outline-none focus:shadow"
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

          <label className="block text-gray-300 font-bold my-6" htmlFor="goal">
            Objetivo:
          </label>
          <select
            className="w-48 h-10 bg-gray-600 border-none hover:text-gray-100 text-gray-300 px-6 py-2  rounded-2xl shadow-xl leading-tight focus:outline-none focus:shadow"
            value={activityFactor}
            onChange={(e) => setActivityFactor(e.target.value)}
          >
            <option value="weightLoss">Perder peso</option>
            <option value="maintenance">Manter de peso</option>
            <option value="weightGain">Ganhar peso</option>
          </select>
        </div>
        <div className="px-6 py-2 flex justify-around text-center">
          <div>
            <label
              className="block text-gray-300 font-bold py-4"
              htmlFor="carbs"
            >
              Carboidratos (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de carboidratos consumidos"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-300 font-bold py-4"
              htmlFor="proteins"
            >
              Proteínas (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de proteínas consumidas"
              value={proteins}
              onChange={(e) => setProteins(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-gray-300 font-bold py-4"
              htmlFor="fats"
            >
              Gorduras (g):
            </label>
            <input
              className="shadow-xl rounded-2xl w-28 py-2 px-6 bg-gray-600 text-gray-300 hover:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Insira a quantidade de gorduras consumidas"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center py-6">
          <button
            onClick={calculateRecommendation}
            className="text-center bg-gray-200 text-gray-700 opacity-70 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-gray-200 hover:opacity-100 hover:bg-blue-500 font-bold py-2 px-8 rounded-xl"
            type="button"
          >
            Calcular recomendação
          </button>
        </div>
      </form>
      {recommendation && (
        <div className="py-2">
          <h3 className="text-lg font-bold text-gray-200 mb-2">
            Recomendação de macronutrientes:
          </h3>
          <p className="text-gray-300">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default MacronutrientTracker;
