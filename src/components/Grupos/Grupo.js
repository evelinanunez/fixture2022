import React from "react";
import Layout from "../Layout";

const Grupo = ({ imagen }) => {
  return (
    <>
      {/**
       * tr: row
       * td:data
       * th:head
       */}
      <section className="col-12 col-md-6 col-lg-3">
        <h3>Grupo ...</h3>
        <table className="table table-hover border">
          <tbody>
            <tr>
              <td>Pais...</td>
              <td className="text-end">
                <img src="" alt={imagen}></img>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Grupo;
