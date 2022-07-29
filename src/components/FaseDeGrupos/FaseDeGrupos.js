import React from "react";
import Filtros from "./Filtros";
import Partidos from "./Partidos";

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
        <Partidos
          cabeceraPartidos={[
            "Grupo",
            "Fecha",
            "Equipo 1",
            "Equipo 2",
            "Resultado",
            "Acciones",
          ]}
        />
      </section>
    </>
  );
};

export default FaseDeGrupos;
