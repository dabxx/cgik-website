import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import VisitSection from "../components/VisitSection";
import YouTubeVideosSection from "../components/YouTubeVideosSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection/>
      <YouTubeVideosSection/>
      <VisitSection/>
    </div>
  );
};

export default Home;
