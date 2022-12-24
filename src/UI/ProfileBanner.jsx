import React from "react";
import { useSelector } from "react-redux";

const ProfileBanner = () => {
  const user = useSelector((state) => state.login.user);
console.log(user)
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <p className="font-bold text-lg">Username: {user.foundUser.username}</p>
      <p className="font-bold text-lg">Role: {user.foundUser.role}</p>
    </div>
  );
};

export default ProfileBanner;
