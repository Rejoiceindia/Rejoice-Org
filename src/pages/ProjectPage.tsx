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
import SponsorSection from "../components/project-page/SponsorSection";
import IssueSection from "../components/project-page/IssueSection";
import Footer from "../components/Home-page/Footer";
import ProjectDetailsImage from "../../public/images/ai-assistant-demo.png";
import ScrollToTop from "../components/ScrollToTop";

type Props = {};

const ProjectPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-20 w-full text-white bg-[#f0f0f0] dark:bg-[#0d0d0d]">
      <ScrollToTop />
      <HeroSection
        projectName={projectData.projectName}
        projectDescription={projectData.projectDescription}
        projectGithubLink={projectData.projectGithubLink}
      />
      <ProjectDetails
        projectDetailsText={projectData.projectDetailsText}
        projectDetalsImage={ProjectDetailsImage}
      />
      <TechStackComponent />
      <FeaturesSection featuresList={featureList} />
      <ProjectTimeline items={projectData.projectTimelineData} />
      <ContributorsSection contributorList={contributorList} />
      <SponsorSection sponsorList={sponsorList} />
      <IssueSection />
      <Footer />
    </div>
  );
};
export default ProjectPage;
