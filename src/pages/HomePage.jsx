import React from "react";
import Banner from "../UI/Banner";
import GymDescriptionBanner from "../components/GymDescriptionBanner";
import TopActivities from "../components/TopActivities";
import FacilitiesSlider from "../components/FacilitiesSlider";
import PeopleCallOut from "../components/PeopleCallOut";
import Footer from "../UI/Footer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TopActivities />
      <GymDescriptionBanner/>
      <FacilitiesSlider />
      <PeopleCallOut />
      <Footer/>
    </div>
  );
};

export default HomePage;
