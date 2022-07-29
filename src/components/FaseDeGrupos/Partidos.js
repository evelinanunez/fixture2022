import React from "react";

const Partidos = ({ cabeceraPartidos }) => {
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <table className="table table-hover">
        <thead>
          <tr className="border-bottom border-dark">
            {cabeceraPartidos.map((campoCabecera) => {
              return <th scope="col">{campoCabecera}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>21 de noviembre - 07: 00</td>
            <td>Senegal</td>
            <td>Paises Bajos</td>
            <td>Resultado</td>
            <td>Acciones</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Partidos;
