import React from "react";
import informacion from "../../assets/Informacion.json";
import FaseDeGrupos from "./FaseDeGrupos";

const Partidos = () => {
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <table className="table table-hover">
        <thead>
          <th>Grupo</th>
          <th>Fecha</th>
          <th>Equipo 1</th>
          <th>Equipo 2</th>
          <th>Resultados</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          <tr>
            <td>21 de noviembre - 07: 00</td>
            <td>Senegal</td>
            <td>Paises Bajos</td>
            <td>Resultado</td>
            <td>Acciones</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Partidos;
