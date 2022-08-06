import React from "react";
import Filtros from "./Filtros";
import Partido from "./Partido";
import TablePartidos from "./TablePartidos";

const FaseDeGrupos = () => {
  return (
    <>
      <h3>Fase de Grupos</h3>
      <section className="d-inline my-3 ">
        <div className="row">
          <Filtros tituloSelector={"Seleccionar Equipo"} />
          <Filtros tituloSelector={"Ordenar Por"} />
        </div>
      </section>
      <section>
        <TablePartidos />
      </section>
    </>
  );
};

export default FaseDeGrupos;
