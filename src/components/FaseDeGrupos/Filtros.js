import React from "react";

const Filtros = ({ tituloSelector }) => {
  return (
    <>
      {/**
       * No se como hacer los select mas anchos.
       */}
      <div className="col-12 col-lg-3 justify-content-start my-2">
        <select className="form-select">
          <option selected="">{tituloSelector}</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    </>
  );
};

export default Filtros;
