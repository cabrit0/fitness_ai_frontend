import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import ProfileBanner from "../UI/ProfileBanner";

const UserProfilePage = () => {
  return (
    <div className="bg-mesh w-screen h-screen">
      <ProfileBanner />
      <ProfileMenu />
    </div>
  );
};

export default UserProfilePage;
