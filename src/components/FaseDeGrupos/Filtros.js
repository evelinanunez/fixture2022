import React from "react";

const Filtros = ({ tituloSelector }) => {
  return (
    <>
      {/**
       * No se como hacer los select mas anchos.
       */}
      <select className="form-select">
        <option selected="">{tituloSelector}</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </>
  );
};

export default Filtros;
