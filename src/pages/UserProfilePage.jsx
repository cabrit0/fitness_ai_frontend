import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import ProfileBanner from "../UI/ProfileBanner";

const UserProfilePage = () => {
  return (
    <div className="bg-mesh w-screen h-screen overflow-hidden flex flex-col justify-between">
      <ProfileBanner />
      <div className="overflow-hidden"></div>
      <ProfileMenu />
    </div>
  );
};

export default UserProfilePage;
