import React from "react";

const TableHome = ({ titulo }) => {
  return (
    <>
      <h3>{titulo}</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Hora Local</th>
            <th scope="col">Equipo 1</th>
            <th scope="col">Equipo 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07:00</td>
            <td>Senegal</td>
            <td>Países Bajos</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>Inglaterra</td>
            <td>Iran</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>Qatar</td>
            <td>Ecuador</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td>EE.UU</td>
            <td>TBC</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableHome;
