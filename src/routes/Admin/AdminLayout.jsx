import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/BackButton";

function AdminLayout() {
	const navigate = useNavigate();

	const navbar = [
		["Inicio", "/admin"],
		["Profesor", "/admin/profesores"],
		["Seccion", "/admin/secciones"],
		["Materia", "/admin/profesores"],
	];

	return (
		<>
			<Navbar names={navbar} />
			{/* TODO pilas porque el navbar tiene pos absoluta, esta por encima del contenido
			habria que modificar el navbar o algo para no tener que usar fragment o div */}
			<Container sx={{ margin: "70px" }}>
				<BackButton />
				<Outlet />
			</Container>
		</ >
	);
}

export default AdminLayout;
