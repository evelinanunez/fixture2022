import React from "react"; // Esto es porque uso la librearia React en esta app.
import "./App.css";
import CuartosDeFinal from "./components/CuartosDeFinal/CuartosDeFinal";
import FaseDeGrupos from "./components/FaseDeGrupos/FaseDeGrupos";
import Grupos from "./components/Grupos/Grupos";
import Home from "./components/Home/Home";
import OctavosDeFinal from "./components/OctavosDeFinal/OctavosDeFinal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemiFinal from "./components/SemiFinal/SemiFinal";
import Final from "./components/Final/Final";
import Layout from "./components/Layout";

const App = ({ children }) => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/fase-de-grupos" element={<FaseDeGrupos />} />
          <Route path="/octavos" element={<OctavosDeFinal />} />
          <Route path="/cuartos" element={<CuartosDeFinal />} />
          <Route path="/semifinal" element={<SemiFinal />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
