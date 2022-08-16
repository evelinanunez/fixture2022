import React from "react";

const Partido = (props) => {
  const { datosPartido } = props;
  const { fecha, id, grupo, equipo1, equipo2, resultado1, resultado2 } =
    datosPartido;
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
    <tr key={id}>
      <td>{grupo}</td>
      <td>{fechaLocal + " - " + horaLocal}</td>
      <td>{equipo1}</td>
      <td>{equipo2}</td>
      <td>
        {resultado1 && resultado2 ? resultado1 + " a " + resultado2 : "-"}
      </td>
      <td>
        <i class="fa-solid fa-pencil"></i>
      </td>
    </tr>
  );
};

export default Partido;
