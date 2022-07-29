import React from "react";
import BuscarEquipo from "./BuscarEquipo";
import Grupo from "./Grupo";

const Grupos = () => {
  return (
    <>
      <BuscarEquipo />
      <div className="row">
        <Grupo
          paises={["Qatar", "Ecuador", "Senegal", "Países Bajos"]}
          grupo="A"
          imagen="Bandera"
        />
        <Grupo
          paises={["Inglaterra", "Irán", "EE.UU", "Países Bajos"]}
          grupo="B"
          imagen="Bandera"
        />
        <Grupo
          paises={["Argentina", "Arabia Saudita", "México", "Polonia"]}
          grupo="C"
          imagen="Bandera"
        />
        <Grupo
          paises={["Francia", "Ecuador", "Dinamarca", "Túnez"]}
          grupo="D"
          imagen="Bandera"
        />
      </div>
      <div className="row">
        <Grupo
          paises={["España", "Ecuador", "Alemania", "Japón"]}
          grupo="E"
          imagen="Bandera"
        />
        <Grupo
          paises={["Bélgica", "Canadá", "Marruecos", "Croacia"]}
          grupo="F"
          imagen="Bandera"
        />
        <Grupo
          paises={["Brasil", "Serbia", "Suiza", "Camerun"]}
          grupo="G"
          imagen="Bandera"
        />
        <Grupo
          paises={["Portugal", "Ghana", "Uruguay", "Corea del Sur"]}
          grupo="H"
          imagen="Bandera"
        />
      </div>
    </>
  );
};

export default Grupos;
