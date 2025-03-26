import React, { useState } from "react";
import { ProjectDetails, ProjectDetailsType } from "../../Data/HomePageData";
import { FiBook, FiArrowRight, FiGithub } from "react-icons/fi";
import { Heart } from "../assets/Icons";
import SponsorPopup from "./SponsorPopup";
import { IoRocket } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard: React.FC<ProjectDetailsType> = ({
  projectName,
  description,
  image,
  techStack,
  contributors,
  links,
  projectRoute,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.div
        id="project-section"
        className="bg-[#0d0d0d] hover:shadow-lg hover:shadow-gray-800/30 rounded-xl overflow-hidden shadow-lg duration-300 border border-slate-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -8 }}
      >
        {/* Project Image */}
        <motion.div
          className="relative w-full h-56 overflow-hidden"
          initial={{ opacity: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background Image */}
          <img
            src={image}
            alt={projectName}
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent"></div>

          {/* Project name */}
          <motion.div
            className="absolute bottom-0 left-0 w-full p-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white text-xl font-bold drop-shadow-lg">
              {projectName}
            </h3>
          </motion.div>
        </motion.div>

        {/* Project Details */}
        <div className="p-6">
          {/* Tech Stack */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {techStack.map((tech) => (
              <motion.span
                className="inline-block bg-[#000000]/60 text-gray-300 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-sm mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Contributors */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex -space-x-2 relative">
              {contributors.map((dev, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-none transform transition-transform duration-300 hover:scale-110 hover:z-10"
                    src={dev.image}
                    alt={dev.name}
                  />

                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-[#0d0d0d] dark:duration-300 text-white text-xs rounded whitespace-nowrap transition-opacity duration-300 mb-2 pointer-events-none z-30 min-w-max">
                    {dev.name}
                    <div className="absolute w-2 h-2 dark:bg-[#0d0d0d] dark:duration-300 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 top-full -mt-1"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-300 dark:duration-300">
              {contributors.length} contributors
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex justify-between items-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex gap-2">
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-md bg-black/60 text-white text-xs font-medium hover:bg-[#252540] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="text-[#00FF66]" /> GitHub
              </motion.a>

              <motion.a
                href={links.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-md bg-black/60 text-white text-xs font-medium hover:bg-[#252540] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiBook className="text-[#00FF66]" /> Documentation
              </motion.a>
            </div>

            <motion.div whileHover={{ x: 5 }}>
              <Link
                className="flex items-center text-[#00FF66] text-sm hover:underline"
                to={projectRoute}
              >
                View Details <FiArrowRight className="ml-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Sponsor Button */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#"
              onClick={openModal}
              className="group flex items-center justify-center gap-2 py-2 rounded-md bg-gradient-to-b from-[#046b2d] to-[#039d3e] text-white text-sm font-medium hover:from-[#0F3A20] hover:to-[#0D2E1A] transition-all duration-300 w-full border-[#00FF66]/20 hover:border-[#00FF66]/60"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-4 h-4 hover:text-[##00FF66] text-white group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
              <span className=" transition-colors duration-300">
                Sponsor this project
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* SponsorPopup */}
      <SponsorPopup isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

const ProjectSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.p
            className="text-[#00FF66] text-sm font-medium uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="text-white text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our open-source projects that are revolutionizing real
            estate through collaboration, innovation, and cutting-edge
            solutions.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ProjectDetails.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              projectName={project.projectName}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              contributors={project.contributors}
              links={project.links}
              projectRoute={project.projectRoute}
            />
          ))}

          {/* Coming soon project */}
          <motion.div
            className="bg-[#0d0d0d] hover:bg-[#0d0d0d]/60 duration-300 rounded-xl border border-gray-800 hover:shadow-lg hover:shadow-gray-800/30 p-8 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="text-[#00FF66] mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <IoRocket className="w-20 h-20 animate-pulse" />
            </motion.div>

            <motion.h3
              className="text-white text-xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              More Projects Coming Soon
            </motion.h3>

            <motion.p
              className="text-gray-400 text-sm mb-6 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We're working on exciting new open-source projects to further
              revolutionize real estate technology. Stay tuned for updates!
            </motion.p>

            <motion.a
              href="https://github.com/Rejoiceindia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00FF66] text-sm hover:underline"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ x: 5 }}
            >
              Follow us on GitHub <FiArrowRight className="ml-1" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
