import React, { useState } from "react";
import HomeSection from "./HomeSection";
import ResumeSection from "./ResumeSection";
import ProjectsSection from "./ProjectsSection";
import ActivitiesSection from "./ActivitiesSection";
import ContactSection from "./ContactSection";

const Sections = ({ toggleModal }) => {
  return (
    <div>
      <HomeSection />
      <ResumeSection toggleModal={toggleModal} />
      <ProjectsSection toggleModal={toggleModal} />
      {/* <ActivitiesSection /> */}
      <ContactSection />
    </div>
  );
};

export default Sections;
