import React from "react";

const PartidosOctavosDeFinal = () => {
  return (
    <>
      <div className="row">
        <div className="col-10 ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Equipo 1</th>
                <th scope="col">Equipo 2</th>
                <th scope="col">Resultado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  @mdo
                  {/**<i className="fa-solid fa-pencil"></i>
                   * <i class="fa-solid fa-trash"></i>
                   */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PartidosOctavosDeFinal;
