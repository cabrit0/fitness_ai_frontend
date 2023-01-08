import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyUsersCard from "./MyUsersCard";
import MyUsersProfileCard from "./MyUsersProfileCard";
import Loading from "../../UI/Loading";
import { fetchAllUsers } from "./userSettingsSlice";

const SeeAllUsers = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUsers, setShowUsers] = useState(true);
  const [selectedUser, setSelectedUser] = useState({});

  const handleShowProfile = (user) => {
    setShowUsers(false);
    setSelectedUser(user);
  };

  const handleCloseProfile = () => {
    setShowUsers(true);
  };

  //console.log(users)

  useEffect(() => {
    dispatch(fetchAllUsers())
      .then((response) => {
        setUsers(response.payload);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div className="py-8">
      <h2 className="text-gray-300 text-lg font-bold text-center">
        Meus Utilizadores
      </h2>
      <div className="flex flex-wrap py-8 justify-center">
        {showUsers ? (
          isLoading ? (
            <Loading />
          ) : (
            users.map((user) => (
              <MyUsersCard
                key={user._id}
                user={user}
                onShowProfile={handleShowProfile}
                buttonText="Ver Perfil"
                buttonColor="bg-blue-600"
              />
            ))
          )
        ) : (
          <MyUsersProfileCard
            user={selectedUser}
            onClose={handleCloseProfile}
          />
        )}
      </div>
    </div>
  );
};

export default SeeAllUsers;
