import React from "react";
import informacion from "../../assets/Informacion.json";
import Partido from "./Partido";

const TablePartidos = () => {
  const { Totalpartidos } = informacion;
  Totalpartidos.map((partido) => {
    return (
      <div className="row">
        <Partido TotalPartidos={partido} />
      </div>
    );
  });
};

export default TablePartidos;
