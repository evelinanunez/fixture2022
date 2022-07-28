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
      <section>
        <h3>{"Grupo " + grupo}</h3>
        <div className="col-lg-3">
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
        </div>
      </section>
    </>
  );
};

export default Grupo;
