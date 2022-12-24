import React from "react";
import DateAndTime from "../UI/DateAndTime";
import { useSelector } from "react-redux";

const ProfileBanner = () => {
  const user = useSelector((state) => state.login.user);
  const firstLetter = user.foundUser.username[0];

  return (
    <div className="bg-gray-50 m-8 px-12 lg:mx-56 py-5 rounded-3xl opacity-50 shadow-2xl flex justify-between items-center">
      <div className="rounded-full shadow-lg h-20 w-20 bg-blue-300 flex items-center justify-center">
        <p className="text-center my-auto text-stone-600 font-bold text-5xl">
          {firstLetter}
        </p>
      </div>
      <div>
        <div>
          <p className="font-bold text-stone-900 text-2xl">
            {user.foundUser.username}
          </p>
          <p className="font-bold text-stone-900 text-lg">
            {user.foundUser.roles}
          </p>
        </div>
        <div className="flex justify-end">
          <DateAndTime className="text-stone-900 sm:text-base" />
        </div>
      </div>
    </div>
  );
};
export default ProfileBanner;
