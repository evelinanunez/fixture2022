import React from "react";

// Los componentes reciben como parametros props , y lo accedemos por desestructuracion , sino debería ser props.elemento
const Card = ({ titulo, imagen }) => {
  return (
    <>
      <div className="card mb-4">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-dark">
            Ver más
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
