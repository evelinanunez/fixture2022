import React from "react";

const Partido = (props) => {
  const fecha1 = new Date(props.fecha);
  const fechaLocal = fecha1.toLocaleDateString("es-AR", {
    month: "long",
    day: "numeric",
  });
  const horaLocal = fecha1.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <div className="col-12">
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
            <tr key={props.id}>
              <td>{props.grupo}</td>
              <td>{fechaLocal + " - " + horaLocal}</td>
              <td>{props.equipo1}</td>
              <td>{props.equipo2}</td>
              <td>{props.resultado1}</td>
              <td>{props.resultado2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Partido;
