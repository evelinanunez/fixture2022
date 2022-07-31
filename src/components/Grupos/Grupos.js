import React from "react";
import BuscarEquipo from "./BuscarEquipo";
import Grupo from "./Grupo";

const Grupos = () => {
  return (
    <>
      <BuscarEquipo />
      <div className="row">
        <Grupo />
      </div>
    </>
  );
};

export default Grupos;
