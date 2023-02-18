import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

function ProfesorModificar() {
	const { state } = useLocation();
	const params = useParams();

	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ email, password });
	};

	return (
		<Container>
			<h4>Volver</h4>
			<h2>Administración de profesores</h2>
			<h3>Modificando cuenta</h3>
			<h3>Modificando información de la cuenta</h3>

			<form action="" id="login" method="post" onSubmit={handleSubmit}>
				<p className="item">
					<label htmlFor="nombre"> Nombre </label>
					<input
						// type="email"
						name="nombre"
						id="nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</p>
				<p className="item">
					<label htmlFor="apellido"> Apellido </label>
					<input
						type="apellido"
						name="apellido"
						id="apellido"
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
					/>
				</p>

				<p className="item">
					<label htmlFor="email"> Email </label>
					<input
						// type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</p>
				<p className="item">
					<label htmlFor="password"> Password </label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</p>
				<p className="item">
					<input type="submit" value="Login" />
				</p>
			</form>
		</Container>
	);
}

export default ProfesorModificar;
