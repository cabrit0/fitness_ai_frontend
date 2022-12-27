import React from "react";


import ProfileBanner from "../UI/ProfileBanner";
import ProfileMenu from "../components/ProfileMenu";
import WorkoutForm from "../features/workouts/WorkoutForm";

const WorkoutsPage = () => {
  return (
    <div className="bg-mesh w-screen flex flex-col h-screen overflow-hidden">
      <ProfileBanner />
      <div className="overflow-hidden flex-grow">
        <div className="">
          <WorkoutForm />
        </div>
      </div>
      <ProfileMenu className="" />
    </div>
  );
};

export default WorkoutsPage;
