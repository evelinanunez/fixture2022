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
    <tr key={props.id}>
      <td>{props.grupo}</td>
      <td>{fechaLocal + " - " + horaLocal}</td>
      <td>{props.equipo1}</td>
      <td>{props.equipo2}</td>
      <td>{props.resultado1}</td>
      <td>{props.resultado2}</td>
    </tr>
  );
};

export default Partido;
