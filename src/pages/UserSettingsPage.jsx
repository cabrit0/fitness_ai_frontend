import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import SettingsMenu from "../features/userSettings/SettingsMenu";

const UserSettingsPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <div className="my-8">
          <SettingsMenu />
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default UserSettingsPage;
