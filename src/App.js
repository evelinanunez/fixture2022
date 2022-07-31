import React from "react"; // Esto es porque uso la librearia React en esta app.
import "./App.css";
import Container from "./components/Container";
import CuartosDeFinal from "./components/CuartosDeFinal/CuartosDeFinal";
import FaseDeGrupos from "./components/FaseDeGrupos/FaseDeGrupos";
import Partidos from "./components/FaseDeGrupos/Partidos";
import Grupos from "./components/Grupos/Grupos";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import OctavosDeFinal from "./components/OctavosDeFinal/OctavosDeFinal";

const App = ({ children }) => {
  return (
    <>
      <Layout>
        {/*<Home />*/}
        {/*<Grupos />*/}
        {/**<FaseDeGrupos /> */}
        {/**<OctavosDeFinal />*/}
        {/** */}
        <CuartosDeFinal />
      </Layout>
    </>
  );
};

export default App;
