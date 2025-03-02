import { motion } from 'framer-motion';

const Tagline = () => {
  return (
      <div className="max-w-7xl mx-auto text-center mt-40 mb-60 px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-extrabold tracking-wider leading-16 text-gray-800 duration-300 dark:text-white"
          > 
              <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
              >
                  Revolutionizing <span className="text-[#4F67FF] dark:text-[rgb(122,139,252)]">Real Estate Tech</span>
              </motion.span>
              <br />
              <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
              >
                  with Open Source
              </motion.span>
          </motion.h1>
          
          {/* description */}
          <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 text-lg text-gray-800 dark:text-gray-300 duration-300 leading-relaxed max-w-7xl mx-auto"
          >
              The future of real estate technology is being shaped by open-source development and AI-driven innovations. With a global community of contributors, we are building cutting-edge, transparent, and AI-powered solutions using LLMs with a dedicated knowledge base. Our GitHub-hosted projects enhance real estate tools, automate workflows, and drive smarter decision-making, redefining the industry for a more efficient future.
          </motion.p>
      </div> 
  )
}

export default Tagline
