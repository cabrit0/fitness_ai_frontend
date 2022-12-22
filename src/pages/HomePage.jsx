import React from "react";
import Banner from "../UI/Banner";
import GymDescriptionBanner from "../components/GymDescriptionBanner";
import TopActivities from "../components/TopActivities";
import FacilitiesSlider from "../components/FacilitiesSlider";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TopActivities />
      <GymDescriptionBanner/>
      <FacilitiesSlider />
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;
