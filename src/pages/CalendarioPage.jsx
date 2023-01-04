import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import FullCalendar from "../features/calendar/FullCalendar";
import AssignedWorkouts from "../features/calendar/AssignedWorkouts";

const CalendarioPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <FullCalendar />
        <AssignedWorkouts />
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default CalendarioPage;
