import React from "react";
import { useSelector } from "react-redux";
import { calculateBMI, determineBodyCategory } from "./BMI_Calculator";

function UserHealthInfo() {
  // Get the user data from the store
  const user = useSelector((state) => state.login.user.foundUser);

  // Calculate the BMI
  const bmi = calculateBMI(user.peso, user.altura);

  // Determine the body category based on the BMI
  const bodyCategory = determineBodyCategory(bmi);

  let textColor;
  if (bodyCategory === "Muito Magro") {
    textColor = "text-green-600";
  } else if (bodyCategory === "Peso Normal") {
    textColor = "text-green-400";
  } else if (bodyCategory === "Sobrepeso") {
    textColor = "text-orange-600";
  } else if (
    bodyCategory === "Obesidade Grau I" ||
    bodyCategory === "Obesidade Grau II" ||
    bodyCategory === "Obesidade Grau III"
  ) {
    textColor = "text-red-600";
  }

  return (
    <>
      <h2 className="text-center text-xl text-gray-100 pb-4 ">Meus Dados</h2>
      <div className="bg-gray-100 bg-opacity-20 flex flex-col items-center mx-12 rounded-2xl">
        <div className="text-gray-400 mb-2 w-full rounded-lg pt-4">
          Idade: {user.idade} | Altura: {user.altura} cm | Peso: {user.peso} kg
          | Sexo: {user.sexo}
        </div>
        <div className=" w-full py-2 px-4 rounded-lg">
          <div className="text-gray-400 font-bold mb-2">
            Indice de Massa Corporal: {bmi.toFixed(1)}
          </div>
          <div className="text-gray-400 font-bold pb-4">
            Categoria Corporal:{" "}
            <span className={`${textColor} opacity-80`}>{bodyCategory}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHealthInfo;
