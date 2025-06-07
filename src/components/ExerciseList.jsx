import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_ENDPOINTS, getAuthHeaders } from "../config/api";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obter token de autenticação do Redux store
  const userAccessToken = useSelector((state) => state.login.user?.accessToken);

  useEffect(() => {
    async function fetchExercises() {
      if (!userAccessToken) {
        setError("Utilizador não autenticado");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data } = await axios.get(
          API_ENDPOINTS.EXERCISES.ALL,
          {
            headers: getAuthHeaders(userAccessToken)
          }
        );
        setExercises(data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar exercícios:", err);
        setError("Erro ao carregar exercícios");
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, [userAccessToken]);

  if (loading) {
    return <div className="text-center p-4">A carregar exercícios...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  if (!exercises.length) {
    return <div className="text-center p-4">Nenhum exercício encontrado</div>;
  }

  const exerciseList = exercises.map((exercise) => (
    <div
      key={exercise.id}
      className="bg-white rounded-lg shadow-md p-4 m-2"
    >
      <h3 className="font-bold text-lg mb-2">{exercise.name}</h3>
      <p className="text-gray-600">Parte do corpo: {exercise.bodyPart}</p>
      <p className="text-gray-600">Músculo alvo: {exercise.target}</p>
      <p className="text-gray-600">Equipamento: {exercise.equipment}</p>
      {exercise.gifUrl && (
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="w-full h-48 object-cover mt-2 rounded"
        />
      )}
    </div>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exerciseList}
    </div>
  );
};

export default ExerciseList;
