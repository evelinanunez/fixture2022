import React from "react";
import Nav from "./Nav";
import PartidosHoy from "./PartidosHoy";
import UltimasNoticias from "./UltimasNoticias";

const Home = () =>{
    return (
        <>
        <Nav/>
        <main>
        <div className="container mt-5">
          <div className="row">
                        <PartidosHoy/>
                        <UltimasNoticias/>
          </div>
        </div>
      </main>
        </>
    );
}

export default Home;
