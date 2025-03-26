import MainSection2 from '../components/Home Page/MainSection'
import ProjectSection from '../components/Home Page/ProjectSection'
import JoinCommunitySection from '../components/Home Page/JoinCommunitySection'
import Footer2 from '../components/Home Page/Footer'
import { motion } from 'framer-motion'

  
const NewHome: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <MainSection2 />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <JoinCommunitySection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Footer2 />
      </motion.div>
    </div>
  );
}

export default NewHome
