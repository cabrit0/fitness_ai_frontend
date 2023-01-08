import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, deleteUser } from "./userSettingsSlice";
import MyUsersCardDelete from "./MyUsersCardDelete";
import Loading from "../../UI/Loading";

const DeleteUser = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.login.user.foundUser._id);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchAllUsers())
      .then((response) => {
        setUsers(response.payload);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  //console.log(users);
  const handleDeleteUser = (userId) => {
    setIsLoading(true);
    if (userId._id === id) {
      setIsLoading(false);
      setMessage("Não podes apagar-te a ti mesmo");
      return;
    }
    dispatch(deleteUser(userId._id));
    dispatch(fetchAllUsers())
      .then((response) => {
        setUsers(response.payload);
        setIsLoading(false);
        setMessage("User apagado com sucesso!");
      })
      .catch((error) => console.error(error));
  };

    return (
      <div className="py-8">
        {isLoading ? (
          <Loading />
        ) : users.length > 0 ? (
          <>
            {!isLoading && message && (
              <div className="text-center text-red-600 my-4">{message}</div>
            )}
            <h2 className="text-gray-300 text-lg font-bold text-center">
              Apagar Utilizador
            </h2>
            <div className="flex flex-wrap py-8 justify-center">
              {users.map((user) => (
                <MyUsersCardDelete
                  key={user._id}
                  user={user}
                  buttonText="Apagar User"
                  buttonColor="bg-red-600"
                  onDeleteClick={handleDeleteUser}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-300">
            Não há utilizadores para apagar
          </div>
        )}
      </div>
    );

};

export default DeleteUser;
