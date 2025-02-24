import Navbar from "../components/Home-page/Navbar"
import Tagline from "../components/Home-page/Tagline"
import JoinCommunity from "../components/Home-page/JoinCommunity"
import Footer from "../components/Home-page/Footer"
import ProjectCard from "../components/Home-page/ProjectCard"
import { ProjectDetails } from "../Data/ProjectCard"

const Home = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="navbar sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
            <Navbar/>
        </div>

        <div className="tagline">
            <Tagline/>
        </div>

        <h1 className="text-3xl text-center tracking-wider font-bold mx-40 dark:text-white dark:duration-300">
            OUR PROJECTS
        </h1>

        <div className="project-cards flex flex-wrap justify-center mt-12 gap-8">
            {ProjectDetails.map((project)=> (
                <ProjectCard key={project.id} {...project}/>
            ))}
        </div>

        <JoinCommunity />

        <Footer />
    </div>
  )
}

export default Home
