import React from "react";

const MyUsersCard = ({ user }) => {
  //console.log(user);

  // generate a random color for the placeholder image
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // check if the color is bluish
  let isBluish = color.match(/^#(00|33|66|99|CC|FF)/);

  // if the color is bluish, generate a new color
  while (isBluish) {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    isBluish = color.match(/^#(00|33|66|99|CC|FF)/);
  }

  return (
    <div className="">
      <div class="card bg-white m-4 shadow-md rounded-lg overflow-hidden">
        {!user.image ? (
          <div class="card-img h-64 bg-gray-300">
            <div
              class="text-8xl font-bold text-center text-white leading-none mt-16 opacity-75"
              style={{ color: color }}
            >
              {user.username[0].toUpperCase()}
            </div>
          </div>
        ) : (
          <div class="card-img h-64 bg-gray-300">
            <img src={user.image} alt={user.username} />
          </div>
        )}
        <div class="card-info font-bold py-2">
          <h3 class="text-2xl font-bold text-gray-800 my-2">{user.username}</h3>
          <p class="text-gray-700 text-base my-0.5">{user.roles}</p>
          <p class="text-gray-700 text-base my-0.5">idade: {user.idade}</p>
          <p class="text-gray-700 text-base my-0.5">{user.sexo}</p>
          <button class="card-button bg-gray-300 text-gray-800 font-bold my-2 py-2 px-4 rounded-full">
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUsersCard;
