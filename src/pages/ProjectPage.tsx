import React from 'react'
import HeroSection from '../components/project-page/Hero'
import { projectData } from '../constants'
import ProjectDetails from '../components/project-page/ProjectDetails'

type Props = {}

const ProjectPage: React.FC<Props> = () => {
  return (
    <div className='flex flex-col gap-10 w-full text-white'>
      <HeroSection projectName={projectData.projectName} projectDescription={projectData.projectDescription} projectGithubLink={projectData.projectGithubLink} />
      <ProjectDetails projectDetailsText={projectData.projectDetailsText} projectDetalsImage='' />
    </div>
  )
}
export default ProjectPage