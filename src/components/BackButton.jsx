import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
	const location = useLocation();

	const validarRuta = (ruta) => {
		const regex = new RegExp("\/.*\/");
		return regex.test(ruta);
	};

	return (
		// TODO por alguna razon el historial no funciona y siempre manda a login

		validarRuta(location.pathname) ? 
			<IconButton component={RouterLink} to={-1}>
				<ArrowBackIcon />
				Volver
			</IconButton>
		 : null
	);
}

export default BackButton;
