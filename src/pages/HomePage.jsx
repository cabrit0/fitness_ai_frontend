import React from "react";
import Banner from "../UI/Banner";
import GymDescriptionBanner from "../components/GymDescriptionBanner";
import TopActivities from "../components/TopActivities";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TopActivities />
      <GymDescriptionBanner/>
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;
