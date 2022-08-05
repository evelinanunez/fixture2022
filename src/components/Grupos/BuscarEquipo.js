import React from "react";

const BuscarEquipo = () => {
  return (
    <>
      <div className="row ">
        <div className="col-12 col-lg-10 my-2">
          <input
            className="form-control "
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Buscar Equipo"
          />
        </div>
        <div className="col-12 col-lg-2 my-2">
          <button type="button" class="btn btn-dark  w-100 ">
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default BuscarEquipo;
