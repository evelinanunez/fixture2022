import React from "react";
import Layout from "../Layout";

const Grupo = () => {
  //Declaro y inicializo un array con los nombres de los grupos
  const LetraGrupo = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return (
    <>
      <section className="col-12 col-lg-3">
        {LetraGrupo.map((Letra) => {
          return <h4>`Grupo ${Letra}`</h4>;
        })}

        <table className="table table-hover">
          <tbody>
            <tr>
              {/*No se que es */}
              <td>Qatar</td>
              <td>
                <img src="">FotoBandera</img>
              </td>{" "}
              {/*Contenido de en filas de la tabla */}
            </tr>
            <tr>
              {/*No se que es */}
              <td>Ecuador</td>
              <td>
                <img src="">FotoBandera</img>
              </td>{" "}
              {/*Contenido de en filas de la tabla */}
            </tr>
            <tr>
              {/*No se que es */}
              <td>Senegal</td>
              <td>
                <img src="">FotoBandera</img>
              </td>{" "}
              {/*Contenido de en filas de la tabla */}
            </tr>
            <tr>
              {/*No se que es */}
              <td>Países Bajos</td>
              <td>
                <img src="">FotoBandera</img>
              </td>{" "}
              {/*Contenido de en filas de la tabla */}
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Grupo;
