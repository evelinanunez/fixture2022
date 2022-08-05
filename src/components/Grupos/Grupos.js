import React from "react";
import BuscarEquipo from "./BuscarEquipo";
import Grupo from "./Grupo";

const Grupos = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h1>Grupos</h1>
        <BuscarEquipo />
        <Grupo />
      </div>
    </>
  );
};

export default Grupos;
