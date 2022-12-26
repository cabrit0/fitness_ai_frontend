import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import Calendar from "../UI/Calendar";

const WorkoutsPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow">
        <Calendar />
        <h1>HELLO</h1>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default WorkoutsPage;
