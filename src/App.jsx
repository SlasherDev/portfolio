import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import FicheProjet from "./pages/FicheProjet";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FicheProjet />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
