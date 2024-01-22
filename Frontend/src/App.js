import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contrato from "./Components/Contrato";
import License from "./Components/License";
import Controle from "./Components/Controle";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Contrato />} />
        <Route path="/licença" element={<License />} />
        <Route path="/license-table" element={<Controle />} />
      </Routes>
    </Router>
  )
};

export default App;
