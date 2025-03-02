import { useTheme } from "../../Context/ThemeContext"      
import { GitHub, Moon, Sun } from "../assets/Icons"

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

                <a href="https://github.com/Rejoiceindia" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-3 text-sm text-black p-2 rounded-full dark:text-white duration-300 hover:bg-gray-100 dark:hover:bg-[#0d0d0d] transition-colors">
                        Explore our Github
                        <GitHub width='24px' height='24px' /> 
                </a>

                <button  className="p-2 rounded-full hover:bg-gray-100 duration-300 dark:hover:bg-[#0d0d0d] transition-colors"
                    aria-label="Toggle theme" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <Sun width='24px' height='24px' fill='white' />
                        ) : (
                            <Moon width='24px' height='24px' fill='black' />
                        )}
                </button>

            </div>
        </div>
    )
}

export default Navbar
