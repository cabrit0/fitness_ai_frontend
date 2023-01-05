import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import Calendar from "../UI/Calendar";
import UserHealthInfo from "../features/healthCare/UserHealthInfo";

const WellbeingPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <Calendar />
        <div className="my-8">
          <h1 className="text-white text-center font-bold">
            <UserHealthInfo />
          </h1>
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default WellbeingPage;
