import React from "react";
import Layout from "../Layout";
import Nav from "../Nav";
import PartidosHoy from "./PartidosHoy";
import UltimasNoticias from "./UltimasNoticias";

const Home = () => {
  return (
    <>
      <Layout>
        <PartidosHoy />
        <UltimasNoticias />
      </Layout>
    </>
  );
};

export default Home;
