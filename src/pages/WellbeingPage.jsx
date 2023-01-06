import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import Calendar from "../UI/Calendar";
import UserHealthInfo from "../features/healthCare/UserHealthInfo";
import MacronutrientTracker from "../features/healthCare/MacronutrientsTracker";

const WellbeingPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <Calendar />
        <div className="my-8 md:mx-6">
          <div className="text-center font-bold">
            <UserHealthInfo />
          </div>
            <MacronutrientTracker />
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default WellbeingPage;
