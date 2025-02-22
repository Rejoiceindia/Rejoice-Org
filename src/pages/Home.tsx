import Navbar from "../components/Home-page/Navbar"
import Tagline from "../components/Home-page/Tagline"
import JoinCommunity from "../components/Home-page/JoinCommunity"
import Footer from "../components/Home-page/Footer"

const Home = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="navbar sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
            <Navbar/>
        </div>

        <div className="tagline">
            <Tagline/>
        </div>

        <JoinCommunity />

        <Footer />
    </div>
  )
}

export default Home
