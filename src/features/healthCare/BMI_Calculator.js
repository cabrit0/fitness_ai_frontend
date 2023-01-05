
export const calculateBMI = (weight, height) => {
  return Math.round((weight / height / height) * 10000);
};

export const determineBodyCategory = (bmi) => {
  if (bmi < 18.5) {
    return "Muito Magro";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Peso Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Sobrepeso";
  } else if (bmi >= 30 && bmi < 35) {
    return "Obesidade Grau I";
  } else if (bmi >= 35 && bmi < 40) {
    return "Obesidade Grau II";
  } else if (bmi >= 40) {
    return "Obesidade Grau III";
  }
};
