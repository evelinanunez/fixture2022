import React from "react";
import Layout from "../Layout";

const Grupo = ({ paises, grupo, imagen }) => {
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <section className="col-12 col-md-6 col-lg-3">
        <h3>{"Grupo " + grupo}</h3>
        <table className="table table-hover border">
          <tbody>
            {paises.map((pais) => {
              return (
                <tr>
                  {/*No se que es */}
                  <td>{pais}</td>
                  <td className="text-end">
                    <img src="" alt={imagen}></img>
                  </td>{" "}
                  {/*Contenido de en filas de la tabla */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Grupo;
