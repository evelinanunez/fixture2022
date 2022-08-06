import React from "react";

const Grupo = (props) => {
  return (
    <div key={props.id} className="col-12 col-md-6 col-lg-3  ">
      {/**
       * tr: row
       * td:data
       * th:head
       * col-md-6 col-lg-3
       */}
      <h3 className="my-3">{props.tituloGrupo}</h3>
      <table className="table  table-hover ">
        <tbody>
          {props.equipos.map((equipo) => {
            return (
              <tr className="border">
                <td className="align-middle">{equipo.nombre}</td>
                <td className="text-end ">
                  <img
                    src={"https://countryflagsapi.com/png/" + equipo.codigo}
                    alt="Bandera"
                    width="80"
                    height="50"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grupo;
