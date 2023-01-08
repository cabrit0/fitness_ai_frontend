import React from "react";

const MyUsersCard = ({ user, onShowProfile }) => {
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
      <div className="card bg-white m-4 shadow-md rounded-lg overflow-hidden">
        {!user.image ? (
          <div className="card-img h-64">
            <div
              className="text-8xl font-bold text-center text-white leading-none mt-16 opacity-75"
              style={{ color: color }}
            >
              {user.username[0].toUpperCase()}
            </div>
          </div>
        ) : (
          <div className="card-img h-64 bg-gray-300">
            <img src={user.image} alt={user.username} />
          </div>
        )}
        <div className="card-info font-bold py-2">
          <h3 className="text-2xl font-bold text-gray-800 my-2">{user.username}</h3>
          <p className="text-gray-700 text-base my-0.5">{user.roles}</p>
          <p className="text-gray-700 text-base my-0.5">idade: {user.idade}</p>
          <p className="text-gray-700 text-base my-0.5">{user.sexo}</p>
          <button
            className="card-button bg-gray-300 opacity-70 text-gray-800 font-bold my-2 py-1 px-4 rounded-full hover:opacity-100 hover:scale-105 transition ease-in-out duration-300"
            onClick={() => onShowProfile(user)}
          >
            Ver Perfil
          </button>
        </div>
      </div>
  );
};

export default MyUsersCard;
