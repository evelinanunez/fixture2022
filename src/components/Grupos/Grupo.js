import React from "react";
import informacion from "../../assets/Informacion.json";

const Grupo = () => {
  const { grupos } = informacion;
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}

      <section className="col-12 col-md-6 col-lg-3">
        {grupos.map((grupo) => {
          const { equipos } = grupo;
          const pathImagen = "https://countryflagsapi.com/png/";
          console.log(equipos);
          return (
            <>
              <h3 key={grupo.id}>{grupo.titulo}</h3>
              {equipos.map((equipo) => {
                return (
                  <table className="table table-hover table-bordered">
                    <tr>
                      <td>{equipo.nombre}</td>
                      <td className="text-end">
                        <img
                          src={pathImagen + equipo.codigo}
                          alt="Bandera"
                          width="100"
                          height="50"
                        ></img>
                      </td>
                    </tr>
                  </table>
                );
              })}
            </>
          );
        })}
      </section>
    </>
  );
};

export default Grupo;
