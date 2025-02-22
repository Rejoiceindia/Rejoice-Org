import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#2A2938] dark:bg-[#282626] text-white py-8 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">
                        Rejoice <span className="text-[#4F67FF]">India</span>
                    </h2>
                    <p className="text-gray-400 mt-2">Xyz city, Abc state, India</p>
                    <p className="text-gray-400">+91 XXXXX XXXXX</p>
                </div>

                <div className="flex flex-col items-start md:items-end">
                    <h3 className="text-lg font-semibold mb-4">Join Our Social Community</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com/Rejoiceindia" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-[#4F67FF] transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/Rejoiceindia" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-[#4F67FF] transition-colors">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/company/Rejoiceindia" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-[#4F67FF] transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com/Rejoiceindia" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-[#4F67FF] transition-colors">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
