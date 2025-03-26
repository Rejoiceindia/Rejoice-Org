import React from "react";
import HeroSection from "../components/project-page/Hero";
import {
  contributorList,
  featureList,
  projectData,
  sponsorList,
} from "../Data/index";
import ProjectDetails from "../components/project-page/ProjectDetails";
import TechStackComponent from "../components/project-page/TechStackList";
import FeaturesSection from "../components/project-page/FeaturesSection";
import ProjectTimeline from "../components/project-page/ProjectTimeLine";
import ContributorsSection from "../components/project-page/ContributorsSection";
import ScrollToTop from "../components/ScrollToTop";
import Footer2 from "../components/Home Page/Footer";
import IssueSec from "../components/project-page/IssueSection";
import SponsorSec from "../components/project-page/SponsorSection";

type Props = {};

const ProjectPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-full text-white bg-black">
      <ScrollToTop />
      <HeroSection
        projectName={projectData.projectName}
        projectDescription={projectData.projectDescription}
        projectGithubLink={projectData.projectGithubLink}
      />
      <div className="flex flex-col space-y-16 sm:space-y-24 md:space-y-32 pb-16">
        <ProjectDetails
          projectDetailsText={projectData.projectDetailsText} 
        />
        <TechStackComponent />
        <FeaturesSection featuresList={featureList} />
        <ProjectTimeline items={projectData.projectTimelineData} />
        <ContributorsSection contributorList={contributorList} />
        <IssueSec/>
        <SponsorSec sponsorList={sponsorList}/>
      </div>
      <Footer2/>
    </div>
  );
};
export default ProjectPage;
