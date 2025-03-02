import { motion } from 'framer-motion';

const JoinCommunity = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#4F67FF] text-white py-16 px-6 sm:px-8 rounded-2xl mx-4 sm:mx-8 mb-12 mt-20"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
            >
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl font-bold mb-4"
                >
                    Join the Community
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-lg text-white mb-8"
                >
                    Contribute, collaborate, and grow with open source projects. Join a vibrant community 
                    of developers passionate about building impactful solutions.
                </motion.p>

                <motion.a 
                    href="https://github.com/Rejoiceindia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-gradient-to-b from-black to-[#1f1f2a] hover:from-[#1f1f2a] hover:to-black 
                    text-white font-semibold py-3 px-8 rounded-full 
                    transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:shadow-black 
                    transform hover:-translate-y-1 
                    hover:scale-103"
                >
                    Become a Contributor !
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default JoinCommunity; 