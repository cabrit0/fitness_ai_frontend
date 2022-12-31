import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";

const UserSettingsPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <div className="my-8">
          <h1 className="text-white text-center font-bold">
            Opções Meu Perfil, a ser construido...
          </h1>
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default UserSettingsPage;
