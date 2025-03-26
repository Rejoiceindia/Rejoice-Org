import React from 'react';
import { GitHub, Twitter, Linkedin } from '../assets/Icons';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-[#00FF66] transition-colors duration-200 block mb-2"
      whileHover={{ x: 5, color: '#00FF66' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

const Footer2: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      id="footer-section" 
      className="bg-black text-white pt-12 pb-8 px-4 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: About */}
          <motion.div className="col-span-1" variants={fadeInUp}>
            <motion.h3 
              className="text-white font-bold mb-3 text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Rejoice India Proptech
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Revolutionizing Real Estate Tech through open-source innovation.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiMapPin className="mr-2 text-[#00FF66]" />
                <span>39/3, Oshiwara Andheri West, Mumbai, Maharashtra</span>
              </motion.div>
              <motion.div 
                className="flex items-center mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiPhone className="mr-2 text-[#00FF66]" />
                <a href="tel:+919876543210" className="hover:text-[#00FF66] transition-colors duration-200">
                +91 7021 766 299
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiMail className="mr-2 text-[#00FF66]" />
                <a href="mailto:contact@rejoiceindia.com" className="hover:text-[#00FF66] transition-colors duration-200">
                  prashant.rejoice@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Column 2: Resources */}
          <div className=''>
            <h3 className="text-white font-bold mb-3 text-lg">Resources</h3>
            <FooterLink href="https://github.com/Rejoiceindia/docs">Documentation</FooterLink>
            <FooterLink href="https://github.com/Rejoiceindia/api-reference">API Reference</FooterLink>
            <FooterLink href="https://github.com/Rejoiceindia/blog">Blog</FooterLink>
            <FooterLink href="https://github.com/Rejoiceindia/case-studies">Case Studies</FooterLink>
            <FooterLink href="https://github.com/Rejoiceindia">Github</FooterLink>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-bold mb-3 text-lg">Legal</h3>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
            <FooterLink href="/license">License</FooterLink>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2024 Rejoice India Proptech. All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/Rejoiceindia" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-gray-400 hover:text-[#00FF66] transition-colors duration-200">
                <GitHub size={20} />
            </a>
            <a href="https://twitter.com/RejoiceIndia" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="text-gray-400 hover:text-[#00FF66] transition-colors duration-200">
                <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/rejoiceindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#00FF66] transition-colors duration-200">
                <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer2;
