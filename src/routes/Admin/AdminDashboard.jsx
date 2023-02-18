import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
	const navigate = useNavigate();

	return (
		<>
			<h2>Bienvenido administrador Carlos</h2>
			<p> ¿Qué desea hacer?</p>

			<div>
				<button
					onClick={() => {
						navigate("profesores");
					}}
				>
					Administrar Profesores
				</button>

				<a>Adminsitrar secciones</a>
				<a>Administrar materias</a>
			</div>
			<br></br>

			<div>
				<a> Aministrar supervisor</a>
				<a> Administrar administrador</a>
			</div>
			<br></br>

			<a>Crear cuenta</a>
		</>
	);
}

export default AdminDashboard;
