import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="Blackwell-Academy" element={<MinecraftApi />} />
                <Route path="SakuraBot" element={<Redirect />} />*/}

            </Routes>
        </BrowserRouter>

    )
}

export default App
