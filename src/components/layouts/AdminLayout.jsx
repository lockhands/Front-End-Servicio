import React from "react";
import {css} from "@emotion/react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

function AdminLayout(){

    const navbar = [
		["Profesor", "/dashboard-control/admin/profesores"],
		["Seccion", "admin/secciones"],
		["Materia", "admin/profesores"],
	];

    return(
        <div>
            <Navbar names={navbar} />
            <div
                css={css`
                margin-top:64px;
                padding: 1rem 2rem;
                `}
            >
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminLayout;