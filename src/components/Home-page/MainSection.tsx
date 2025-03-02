import { useTheme } from "../../Context/ThemeContext"
import Navbar from "./Navbar"
import Tagline from "./Tagline"
import { motion } from "framer-motion"

const MainSection = () => {
  const { theme } = useTheme()

  return (
    <div className="sm:mb-10 md:mb-14 lg:mb-20 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {
          theme === 'dark' ? (
            <img src="/images/bg-image.jpg" alt="bg-image"  className='w-full z-10 h-screen object-cover -top-1 relative' />
          ) : (
            <img src="/images/bg-image-day.jpg" alt="bg-image" className='w-full z-10 h-screen -top-1 relative' />
          )
        }
      </motion.div>
      
      <motion.div 
        className="absolute bg-[#ffffff8a] dark:bg-[#000000ce] dark:duration-300 top-0 w-full z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}>
        <motion.div 
          className="navbar sm:px-6 lg:px-8 py-4 sticky top-0 z-30"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}>
            <Navbar/>
        </motion.div>

        <div className="tagline">
          <Tagline/>
        </div>
      </motion.div>
    </div>
  )
}

export default MainSection
