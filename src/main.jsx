import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ControlDashboard from "./routes/ControlDashboard";
import Login from "./routes/Login";
import ProfesorDashboard from "./routes/ProfesorDashboard";
import AdminProfesores from "./routes/Admin_Profesor/AdminProfesores";
import ProfesorClases from "./routes/Admin_Profesor/ProfesorClases";
import Profesor_Modificar from "./routes/Admin_Profesor/Profesor_Modificar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./temaCoding";
import axios from "axios";
import SeccionDashboard from "./routes/Seccion/SeccionDashboard";
import SeccionCrear from "./routes/Seccion/SeccionCrear";
import SeccionDetalles from "./routes/Seccion/SeccionDetalles";
import PaginaError from "./routes/PaginaError";
import Clase from "./routes/Profesor/Clase";

import ProfesorLayout from "./components/layouts/ProfesorLayout";
import ClaseEvaluaciones from "./routes/Profesor/ClaseEvaluaciones";
import Notas from "./routes/Profesor/Notas";
import AdminLayout from "./components/layouts/AdminLayout";


const router = createBrowserRouter([
	{
		path:'/',
		element: <AuthComponent />,
		children:[
			{
				path: "/login",
				element: <Login />,
				errorElement: <PaginaError />,
			},
			{
				path: "/dashboard-profesor",
				element: <ProfesorLayout />,
				children: [
					{ index:true, element: <ProfesorDashboard />},
					{ path:"clases/:id", element: <Clase />},
					{ path:"clases/:id/evaluaciones/:lapso", element: <ClaseEvaluaciones />},
					{ path:"clases/:id/evaluaciones/:evaluacionId/notas", element: <Notas />}
				]
			},
			{
				path: "/dashboard-control",
				element: <ControlDashboard />,
			},
			{
				path: "/admin/profesores",
				element: <AdminProfesores />,
			},
			{
				path: "/admin/profesores/:id/clases",
				element: <ProfesorClases />,
			},
			{
				path: "/admin/profesores/:id/modificar",
				element: <Profesor_Modificar />,
			},
			{
				path: "/admin/secciones",
				element: <SeccionDashboard />,
			},
			{
				path: "/admin/secciones/crear",
				element: <SeccionCrear />,
			},
			{
				path: "/admin/secciones/:id",
				element: <SeccionDetalles />,
			}
		]

	},
	{
		path: "/dashboard-control",
		element: <AdminLayout />,
		children: [
			{ index:true, element: <ControlDashboard />},
			{ path:"admin/profesores", element: <AdminProfesores />},
			{ path:"admin/profesores/:id/clases",element: <ProfesorClases />},
			{ path:"admin/profesores/:id/modificar",element: <Profesor_Modificar />},
			{ path:"admin/secciones", element: <SeccionDashboard /> },
			{ path:"admin/secciones/crear",element: <SeccionCrear />},
			{ path:"admin/secciones/:id", element: <SeccionDetalles />},

		]
	},
	


]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);
