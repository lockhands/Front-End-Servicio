import React from "react";
import { useTable } from "react-table";
import { useState, useMemo } from "react";
import { INFO_CLASE } from "./columnas";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { css } from "@emotion/react";

import "../../css/tablas.css";

export function INFO_CLASES({ datos }) {
	//   const [data, setData] = useState([]);

	const navigate = useNavigate();
	const columns = useMemo(() => INFO_CLASE);

	const data = useMemo(() => datos);

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
									if (cell.value !== undefined) {
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									} else
										return (
											<td {...cell.getCellProps()}>


												<div
												css={css`
												width=100%;
												display:flex;
												justify-content:space-evenly;
												align-items:center;`}
												>

												<VisibilityIcon/>
												<EditIcon/>
												<DeleteIcon/>

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
