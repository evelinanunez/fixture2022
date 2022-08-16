import React from "react";

const PartidoOctavoFinal = (props) => {
  const { partidoDeOctavos } = props;

  const fecha2 = new Date(partidoDeOctavos.fecha);

  const fechaOctavos = fecha2.toLocaleDateString("es-AR", {
    month: "long",
    day: "numeric",
  });
  console.log(fechaOctavos);
  const horaOctavos = fecha2.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <tr key={partidoDeOctavos.id}>
      <th scope="row">{fechaOctavos + " - " + horaOctavos}</th>
      <td>{partidoDeOctavos.equipo1}</td>
      <td>{partidoDeOctavos.equipo2}</td>
      <td>
        {partidoDeOctavos.resultado1 && partidoDeOctavos.resultado2
          ? partidoDeOctavos.resultado1 + " a " + partidoDeOctavos.resultado2
          : " - "}
      </td>
      <td>
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-trash"></i>
      </td>
    </tr>
  );
};

export default PartidoOctavoFinal;
