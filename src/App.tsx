import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectPage from './pages/ProjectPage';
// import Home from './pages/Home';
import NewHome from './pages/NewHome';

function App() {
    return (
        <div className="bg-[#F5F5F5] dark:bg-black min-h-screen transition-colors duration-300">
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
                <Route path='/' element={<NewHome/>}/>
                <Route path='/advaiya' element={<ProjectPage />} />
            </Routes>
        </div>
    )
}

export default App
