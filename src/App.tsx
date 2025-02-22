import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home';

function App() {
    return (
        <div className="bg-[#F5F5F5] dark:bg-[#0d0d0d] min-h-screen transition-colors duration-300">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/advaiya' element={<ProjectPage />} />
            </Routes>
        </div>
    )
}

export default App
