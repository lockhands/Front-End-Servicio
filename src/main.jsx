import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./temaCoding";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Login from "./routes/Login";
import AdminLayout from "./routes/Admin/AdminLayout";
import AdminDashboard from "./routes/Admin/AdminDashboard";
import AdminProfesores from "./routes/Admin/AdminProfesores";
import ProfesorClases from "./routes/Admin/ProfesorClases";
import ProfesorModificar from "./routes/Admin/ProfesorModificar";

import ProfesorDashboard from "./routes/Profesor/ProfesorDashboard";

import SeccionDashboard from "./routes/Seccion/SeccionDashboard";
import SeccionCrear from "./routes/Seccion/SeccionCrear";
import SeccionDetalles from "./routes/Seccion/SeccionDetalles";
import PaginaError from "./routes/PaginaError";

axios.defaults.baseURL = "http://localhost:3333";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <PaginaError />,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				path: "",
				element: <AdminDashboard />
			},
			{
				path: "profesores",
				element: <AdminProfesores />,
			},
			{
				path: "profesores/:id/clases",
				element: <ProfesorClases />,
			},
			{
				path: "profesores/:id/modificar",
				element: <ProfesorModificar />,
			},
			{
				path: "secciones",
				element: <SeccionDashboard />,
			},
			{
				path: "secciones/crear",
				element: <SeccionCrear />,
			},
			{
				path: "secciones/:id",
				element: <SeccionDetalles />,
			},
		],
	},
	{
		path: "/profesor",
		element: <ProfesorDashboard />,
		children: [],
	},
	/* 	{
		path: "/supervisor",
		element: <SupervisorDashboard />,
		children: [

		],
	}, */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);
