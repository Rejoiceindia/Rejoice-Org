import { GitHub, Linkedin, Twitter } from "../assets/Icons";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#2A2938] dark:duration-300 text-white py-8 px-6 sm:px-8"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-6 md:mb-0"
                >
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl font-bold"
                    >
                        Rejoice <span className="text-[#4F67FF]">India</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-400 mt-2"
                    >
                        Xyz city, Abc state, India
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-gray-400"
                    >
                        +91 XXXXX XXXXX
                    </motion.p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-start md:items-end"
                >
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-lg font-semibold mb-4"
                    >
                        Join Our Social Community
                    </motion.h3>
                    <div className="flex gap-4">
                        <motion.a 
                            href="https://github.com/Rejoiceindia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-[#4F67FF] transition-colors"
                        >
                            <GitHub className="w-6 h-6"/> 
                        </motion.a>
                        <motion.a 
                            href="https://twitter.com/Rejoiceindia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-[#4F67FF] transition-colors"
                        >
                            <Twitter className="w-6 h-6"/> 
                        </motion.a>
                        <motion.a 
                            href="https://linkedin.com/company/Rejoiceindia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-[#4F67FF] transition-colors"
                        >
                            <Linkedin className="w-6 h-6"/> 
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Footer;
