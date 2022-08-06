import React from "react";

const Filtros = (props) => {
  return (
    <>
      {/**
       * disabled para deshabilitar la primera opción del select
       */}
      <div className="col-12 col-lg-3 justify-content-start my-2">
        <select className="form-select">
          <option selected disabled>
            {props.tituloSelector}
          </option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    </>
  );
};

export default Filtros;
