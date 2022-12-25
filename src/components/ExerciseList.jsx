import React, { useState, useEffect } from "react";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      const { data } = await axios.get(
        "https://fitness-api.onrender.com/api/v1/exercises/allExercises"
      );
      setExercises(data);
    }

    fetchExercises();
  }, []);

  const exerciseList = exercises.map((exercise) => (
    <div>
      key={exercise.id}
      name={exercise.name}
      target={exercise.target}
      bodyPart={exercise.bodyPart}
      gifUrl={exercise.gifUrl}
      equipment={exercise.equipment}
    </div>
  ));

  return exerciseList;
};

export default ExerciseList;
