import React from "react";
import informacion from "../../assets/Informacion.json";
import Partido from "./Partido";

const TablePartidos = () => {
	const { partidos } = informacion;

	return (
		<div className='row'>
			<div className='col-12'>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Grupo</th>
							<th>Fecha</th>
							<th>Equipo 1</th>
							<th>Equipo 2</th>
							<th>Resultados</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{partidos.map((partido) => {
							return <Partido datosPartido={partido} />;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TablePartidos;
