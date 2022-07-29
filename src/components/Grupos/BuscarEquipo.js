import React from "react";

const BuscarEquipo = () => {
  return (
    <>
      <h3>Grupos</h3>
      <div className="d-flex mb-3">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Buscar Equipo"
        />
        <button type="button" class="btn btn-dark">
          Buscar
        </button>
      </div>
    </>
  );
};

export default BuscarEquipo;
