import { useTheme } from "../../Context/ThemeContext"
import Navbar from "./Navbar"
import Tagline from "./Tagline"

const MainSection = () => {
  const { theme } = useTheme()

  return (
    <div className="sm:mb-10 md:mb-14 lg:mb-20 ">
      {
        theme === 'dark' ? (
          <img src="/images/bg-image.jpg" alt="bg-image"  className='w-full z-10 h-screen object-cover -top-1 relative' />
        ) : (
          <img src="/images/bg-image-day.jpg" alt="bg-image" className='w-full z-10 h-screen -top-1 relative' />
        )
      }
          <div className="absolute bg-[#ffffff8a]  dark:bg-[#000000ce] dark:duration-300 top-0 w-full z-20">
            <div className="navbar sm:px-6 lg:px-8 py-4 sticky top-0 z-30">
                <Navbar/>
            </div>

            <div className="tagline">
                <Tagline/>
            </div>
        </div>
    </div>
  )
}

export default MainSection
