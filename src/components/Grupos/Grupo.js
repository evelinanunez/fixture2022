import React from "react";
import informacion from "../../assets/Informacion.json";

const Grupo = () => {
  const { grupos } = informacion;
  return (
    <div className="row">
      {/**
       * tr: row
       * td:data
       * th:head
       * col-md-6 col-lg-3
       */}

      {grupos.map((grupo) => {
        const { equipos } = grupo;
        const pathImagen = "https://countryflagsapi.com/png/";
        console.log(equipos);
        return (
          <div className="col-12 col-md-6 col-lg-3  ">
            <h3 key={grupo.id} className="my-3">
              {grupo.titulo}
            </h3>
            <table className="table  table-hover ">
              <tbody>
                {equipos.map((equipo) => {
                  return (
                    <tr className="border">
                      <td className="align-middle">{equipo.nombre}</td>
                      <td className="text-end ">
                        <img
                          src={pathImagen + equipo.codigo}
                          alt="Bandera"
                          width="80"
                          height="50"
                        ></img>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Grupo;
