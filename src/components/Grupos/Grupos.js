import React from "react";
import BuscarEquipo from "./BuscarEquipo";
import ContenedorGrupos from "./ContenedorGrupos";

const Grupos = () => {
  return (
    <div className="d-flex flex-column">
      <h1>Grupos</h1>
      <BuscarEquipo />
      <ContenedorGrupos />
    </div>
  );
};

export default Grupos;
