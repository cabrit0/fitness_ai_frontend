import React from "react";

const activities = [
  {
    id: 1,
    title: "Yoga",
    description: "Yoga is a physical and mental discipline.",
    image: "https://picsum.photos/id/1/200/300",
    rating: 3.9,
  },
  {
    id: 2,
    title: "Pilates",
    description: "Pilates is a low-impact exercise system.",
    image: "https://picsum.photos/id/2/200/300",
    rating: 3.8,
  },
  {
    id: 3,
    title: "Boxing",
    description: "Boxing is a combat sport with protective gloves.",
    image: "https://picsum.photos/id/3/200/300",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Spinning",
    description: "Spinning is an indoor cycling workout.",
    image: "https://picsum.photos/id/4/200/300",
    rating: 3.8,
  },
  {
    id: 5,
    title: "Kickboxing",
    description:
      "Kickboxing is a martial art that combines punches and kicks.",
    image: "https://picsum.photos/id/5/200/300",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Weightlifting",
    description: "Weightlifting is a sport that involves lifting weights.",
    image: "https://picsum.photos/id/6/200/300",
    rating: 4.1,
  },
  {
    id: 7,
    title: "CrossFit",
    description: "CrossFit is a high-intensity fitness program.",
    image: "https://picsum.photos/id/7/200/300",
    rating: 4.4,
  },
  {
    id: 8,
    title: "Zumba",
    description: "Zumba is a dance fitness program.",
    image: "https://picsum.photos/id/8/200/300",
    rating: 4.5,
  },
  {
    id: 9,
    title: "Barre",
    description: "Barre is a low-impact exercise program.",
    image: "https://picsum.photos/id/9/200/300",
    rating: 4.1,
  },
  {
    id: 10,
    title: "HIIT",
    description: "HIIT is a high-intensity interval training workout.",
    image: "https://picsum.photos/id/10/200/300",
    rating: 4.9,
  },
  {
    id: 11,
    title: "Bootcamp",
    description: "Bootcamp is a high-intensity group fitness program.",
    image: "https://picsum.photos/id/11/200/300",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Swimming",
    description: "Swimming is a low-impact cardiovascular exercise.",
    image: "https://picsum.photos/id/12/200/300",
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
export {activities};
export default Activities;
