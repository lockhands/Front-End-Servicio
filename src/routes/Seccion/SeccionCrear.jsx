import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import SelectAño from "../../components/Select/SelectAño";

function SeccionCrear() {
	const { state } = useLocation();
	return (
		<div>
			<Navbar names={state} />

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<Typography>Crear sección</Typography>

			<SelectAño />
		</div>
	);
}

export default SeccionCrear;
