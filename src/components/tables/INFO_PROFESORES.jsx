import React from "react";
import { useTable } from "react-table";
import { useState, useEffect, useMemo } from "react";
import { INFO_PROFESOR } from "./columnas";
import { useNavigate } from "react-router-dom";
import { getProfesores } from "../../api/profesores";
import { css } from "@emotion/react";
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import "../../css/tablas.css";

export function INFO_PROFESORES({ input }) {
	


	const [datos, setData] = useState([]);
	const navigate = useNavigate();

	const informacion = (id) => {
		navigate(`${id}/clases`);
	};
	const modificar = (id) => {
		navigate(`${id}/modificar`);
	};

	useEffect(() => {
		const fetchProfesores = async () => {
			const profesoresRes = await getProfesores();
			setData(profesoresRes);
			console.log(profesoresRes);
		};

		fetchProfesores();
	}, []);

	const filteredData = datos.filter((el) => {
		//if no input the return the original
		if (input === "") {
			return el;
		}
		//return the item which contains the user input
		else {
			return el.nombre.toLowerCase().includes(input);
		}
	});

	const columns = useMemo(() => INFO_PROFESOR);

	const data = useMemo(() => filteredData);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<div className="container">
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									if (typeof cell.value !== "number")
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									else
										return (
											<td {...cell.getCellProps()}>
												
												<div
												
												css={css`
												width=100%;
												display:flex;
												justify-content:space-evenly;
												align-items:center;`}
												>
												<SchoolIcon 

												onClick={() =>{
													informacion(cell.value);
												}}

												/>

												<EditIcon

												
													onClick={() => {
														modificar(cell.value);
													}}
												/>

												<LockIcon
												/>
												</div>	
											</td>
										);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
