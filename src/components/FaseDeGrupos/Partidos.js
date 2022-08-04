import React from "react";
import informacion from "../../assets/Informacion.json";

const Partidos = () => {
  const { partidos } = informacion;

  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Fecha</th>
            <th>Equipo 1</th>
            <th>Equipo 2</th>
            <th>Resultados</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map((valor) => {
            const { fecha } = valor;
            const fecha1 = new Date(fecha);
            const fechaLocal = fecha1.toLocaleDateString("es-AR", {
              month: "long",
              day: "numeric",
            });
            const horaLocal = fecha1.toLocaleTimeString("es-AR", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <tr key={valor.id}>
                <td>{valor["grupo"]}</td>
                <td>{fechaLocal + " - " + horaLocal}</td>
                <td>{valor["equipo1"]}</td>
                <td>{valor.equipo2}</td>
                <td>{valor["resultado1"]}</td>
                <td>{valor["resultado2"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Partidos;
