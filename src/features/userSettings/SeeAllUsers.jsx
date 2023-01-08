import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyUsersCard from "./MyUsersCard";
import Loading from "../../UI/Loading";
import { fetchAllUsers } from "./userSettingsSlice";

const SeeAllUsers = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex flex-wrap py-8 justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        users.map((user) => <MyUsersCard key={user._id} user={user} />)
      )}
    </div>
  );
};

export default SeeAllUsers;
