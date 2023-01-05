import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import ProfileBanner from "../UI/ProfileBanner";
import Calendar from "../UI/Calendar";
import ProfileExercises from "../features/exercises/ProfileExercises";
import ChartLayout from "../layouts/ChartLayout";
import AssignedWorkouts from "../features/calendar/AssignedWorkouts";

const UserProfilePage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden overflow-y-scroll flex-grow no-scrollbar">
        <Calendar />
        <ChartLayout />
        <ProfileExercises  />
        <AssignedWorkouts className="my-8" />
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default UserProfilePage;
