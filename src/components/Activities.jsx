import React from "react";
import yoga from "../assets/yoga.jpg";
import zumba from "../assets/zumba.jpg";
import pilates from "../assets/pilates.jpg";
import boxing from "../assets/boxing.jpg";
import spin from "../assets/spin.jpg";
import bare from "../assets/bare.jpg";
import hiit from "../assets/hiit.jpg";
import kickboxing from "../assets/kickboxing.jpg";
import cardio from "../assets/cardio.jpg";
import dance from "../assets/dance.jpg";
import swimming from "../assets/swimming.jpg";
import strength from "../assets/strenght.jpg";

const activities = [
  {
    id: 1,
    title: "Yoga",
    description: "Yoga é uma disciplina física e mental.",
    image: yoga,
    rating: 3.9,
  },
  {
    id: 2,
    title: "Pilates",
    description: "Pilates é um sistema de exercícios de baixo impacto.",
    image: pilates,
    rating: 3.8,
  },
  {
    id: 3,
    title: "Boxing",
    description: "O boxe é um desporto de combate com luvas de proteção.",
    image: boxing,
    rating: 4.8,
  },
  {
    id: 4,
    title: "Spinning",
    description: "Spinning é um treino de ciclismo indoor.",
    image: spin,
    rating: 3.8,
  },
  {
    id: 5,
    title: "Kickboxing",
    description: "Kickboxing é uma arte marcial que combina socos e pontapés.",
    image: kickboxing,
    rating: 4.1,
  },
  {
    id: 6,
    title: "Weightlifting",
    description: "Halterofilismo é um desporto que envolve levantar pesos.",
    image: strength,
    rating: 4.1,
  },
  {
    id: 7,
    title: "CrossFit",
    description:
      "CrossFit é um programa de condicionamento físico de alta intensidade.",
    image: cardio,
    rating: 4.4,
  },
  {
    id: 8,
    title: "Zumba",
    description: "Zumba é um programa de fitness de dança.",
    image: zumba,
    rating: 4.5,
  },
  {
    id: 9,
    title: "Barre",
    description: "Barre é um programa de exercícios de baixo impacto.",
    image: bare,
    rating: 4.1,
  },
  {
    id: 10,
    title: "HIIT",
    description: "HIIT é um treino intervalado de alta intensidade.",
    image: hiit,
    rating: 4.9,
  },
  {
    id: 11,
    title: "Dança",
    description: "Bootcamp em dança, aulas de salao e contenporaneas.",
    image: dance,
    rating: 4.6,
  },
  {
    id: 12,
    title: "Swimming",
    description: "A natação é um exercício cardiovascular de baixo impacto.",
    image: swimming,
    rating: 4.1,
  },
  // ...
];
const Activities = () => {
  return (
    <div>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h1>{activity.title}</h1>
          <p>{activity.description}</p>
          <img src={activity.image} alt={activity.title} />
          <p>Rating: {activity.rating}</p>
        </div>
      ))}
    </div>
  );
};
export { activities };
export default Activities;
