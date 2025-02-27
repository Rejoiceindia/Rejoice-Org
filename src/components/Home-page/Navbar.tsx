import { FaGithub } from "react-icons/fa"
import { HiSun, HiMoon } from "react-icons/hi"
import { useTheme } from "../../Context/ThemeContext"      

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="flex items-center justify-between w-full h-16 px-6 sm:px-8 rounded-full shadow-lg shadow-gray-300 duration-300 dark:shadow-black bg-white dark:bg-[#282626]">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900 duration-300 dark:text-white">
                    Rejoice India
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <button  className="p-2 rounded-full hover:bg-gray-100 duration-300 dark:hover:bg-[#0d0d0d] transition-colors"
                    aria-label="Toggle theme" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <HiSun className="w-6 h-6 text-white" />
                        ) : (
                            <HiMoon className="w-6 h-6 text-black" />
                        )}
                </button>

                <a href="https://github.com/Rejoiceindia" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-black p-2 rounded-full dark:text-white duration-300 hover:bg-gray-100 dark:hover:bg-[#0d0d0d] transition-colors">
                        <FaGithub className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}

export default Navbar
