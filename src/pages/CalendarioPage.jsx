import React from "react";
import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import Calendar from "../UI/Calendar";
import FullCalendar from "../features/calendar/FullCalendar";

const ExercisesPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <div className="my-8">
          <FullCalendar />
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default ExercisesPage;
