import React from "react";
import informacion from "../../assets/Informacion.json";
import Grupo from "./Grupo";

const ContenedorGrupos = () => {
  const { grupos } = informacion;
  return (
    <>
      <div className="row">
        {grupos.map((grupo) => {
          const { equipos } = grupo;
          return (
            <>
              <Grupo
                key={grupo.id}
                tituloGrupo={grupo.titulo}
                equipos={equipos}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContenedorGrupos;
