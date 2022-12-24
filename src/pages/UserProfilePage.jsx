import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import ProfileBanner from "../UI/ProfileBanner";
import Calendar from "../UI/Calendar";

const UserProfilePage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden flex-grow">
        <Calendar />
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default UserProfilePage;
