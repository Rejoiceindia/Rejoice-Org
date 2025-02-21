import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectPage from './pages/ProjectPage';

function App() {
    return (
        <div className="">
            <Routes>
                <Route path='/' />
                <Route path='/advaiya' element={<ProjectPage />} />
            </Routes>
        </div>
    )
}

export default App
