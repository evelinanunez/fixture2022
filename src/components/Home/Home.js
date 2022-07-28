import React from "react";
import Layout from "../Layout";
import PartidosHoy from "./PartidosHoy";
import UltimasNoticias from "./UltimasNoticias";

const Home = () => {
  return (
    <>
      <PartidosHoy />
      <UltimasNoticias />
    </>
  );
};

export default Home;
