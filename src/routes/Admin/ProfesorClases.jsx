import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getClases } from "../../api/profesores_clases";
import { INFO_CLASES } from "../../components/Tables/INFO_CLASES";
import { getProfesores } from "../../api/profesores";

function ProfesorClases() {
	const [clases, setClase] = useState([]);
	const [profesor, setProfesor] = useState([]);

	const { state } = useLocation();
	const params = useParams();

	useEffect(() => {
		const fetchClases = async () => {
			const ClasesRes = await getClases(params.id);
			const ProfesoresRes = await getProfesores();
			setProfesor(ProfesoresRes);
			setClase(ClasesRes);
		};

		fetchClases();
	}, []);

	return (
		<>
			<h1>Administración de profesores</h1>

			<Typography>
				{" "}
				{profesor.map((element) => {
					if (element.id == params.id) {
						return `Clases del profesor:  ${element.nombre} ${element.apellido}`;
					}
				})}
			</Typography>

			<INFO_CLASES datos={clases} />

			<br></br>

			<h3>Añadir clase</h3>
		</>
	);
}

export default ProfesorClases;
