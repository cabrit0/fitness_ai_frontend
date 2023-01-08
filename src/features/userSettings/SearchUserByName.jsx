import React, { useEffect, useState } from "react";
import Loading from "../../UI/Loading";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./userSettingsSlice";
import MyUsersCard from "./MyUsersCard";
import MyUsersProfileCard from "./MyUsersProfileCard";
import SearchInput from "../../UI/SearchInput";

const SearchByName = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [selectedUser, setSelectedUser] = useState({});

  const handleShowProfile = (user) => {
    setShowUsers(false);
    setSelectedUser(user);
  };

  const handleCloseProfile = () => {
    setShowUsers(true);
  };

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    //console.log(inputValue);
    if (inputValue === "") {
      setUsers(originalUsers);
    } else {
      const filteredUsers = originalUsers.filter((user) =>
        user.username.includes(inputValue)
      );
      setUsers(filteredUsers);
    }
  };

  //console.log(users)

  useEffect(() => {
    dispatch(fetchAllUsers())
      .then((response) => {
        setUsers(response.payload);
        setOriginalUsers(response.payload);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div className="py-8">
      <h2 className="text-gray-300 text-lg font-bold text-center">
        Procurar Users p/ Nome
      </h2>
      <SearchInput onSearch={handleSearch} />
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

export default SearchByName;
