import React from "react"; // Esto es porque uso la librearia React en esta app.
import "./App.css";
import Container from "./components/Container";
import FaseDeGrupos from "./components/FaseDeGrupos/FaseDeGrupos";
import Partidos from "./components/FaseDeGrupos/Partidos";
import Grupos from "./components/Grupos/Grupos";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Nav from "./components/Nav";

const App = ({ children }) => {
  return (
    <>
      <Layout>
        {/*<Home />*/}
        {/*<Grupos />*/}
        {/**<FaseDeGrupos /> */}
        <FaseDeGrupos />
      </Layout>
    </>
  );
};

export default App;
