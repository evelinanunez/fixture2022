import React from "react";
import PartidoOctavoFinal from "./PartidoOctavoFinal";
import informacion from "../../assets/Informacion.json";

const TablePartidosOctavosFinal = () => {
  const { partidos } = informacion;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Equipo 1</th>
          <th scope="col">Equipo 2</th>
          <th scope="col">Resultado </th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {partidos.map((partido) => {
          return <PartidoOctavoFinal partidoDeOctavos={partido} />;
        })}
      </tbody>
    </table>
  );
};

export default TablePartidosOctavosFinal;
