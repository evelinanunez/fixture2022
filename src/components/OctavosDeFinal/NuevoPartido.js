import React from "react";

const NuevoPartido = () => {
  return (
    <div className="row my-2 ms-1">
      <button type="button" className="btn btn-dark col-2 p-0">
        {/**
         * btn-secondary disabled" role="button" aria-disabled="true"
         * Ver si esta propiedad sirve para hacer una condicion de que no se puede agregar mas de 4 partidos en cuartos de final
         */}
        Nuevo Partido
      </button>
    </div>
  );
};

export default NuevoPartido;
