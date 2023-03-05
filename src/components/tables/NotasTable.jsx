import React, { useMemo, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useTable } from "react-table";

import EditCell from "../molecules/EditCell";
import axios from "axios";

function NotasTable({ data, info,refetch }) {
  
  const [updatedNotas, setUpdatedNotas] = useState([]);

  const onChange = (estudianteId, puntaje) => {
    const newUpdatedNotas = [
      ...updatedNotas.filter((n) => n.estudianteId != estudianteId),
      { estudianteId, puntaje },
    ];
    setUpdatedNotas(newUpdatedNotas);
  };

  const onUpload = async () => {
    await axios
      .request({
        method: "PUT",
        url: `/profesor/clases/${info.clase.id}/evaluaciones/${info.evaluacion.id}/calificaciones`,
        data: { calificaciones: updatedNotas },
      })
      .then((response) => {

        console.log(response);
        setUpdatedNotas([])
        refetch()
      })
      .catch((err) => null);
  };

  const columns = useMemo(
    () => [
      { Header: "Nombres y Apellidos", accessor: "fullname" },
      { Header: "Cédula", accessor: "cedula" },
      { Header: "Nota", accessor: "nota" },
      { Header: "122", accessor: "122" },
    ],
    []
  );

  const memoData = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns,
    data: memoData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <div
      css={css`
        width: 80%;
        margin: 1rem auto;

        .table-info {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 1.4rem;
        }
      `}
    >
      <div className="table-info">
        <Typography variant="h2">
          Cargar notas de {info.evaluacion.titulo}
        </Typography>
        <Button onClick={onUpload} variant="contained">
          {" "}
          Enviar{" "}
        </Button>
      </div>

      <table
        css={css`
          td,
          th {
            text-align: center;
          }
        `}
        {...getTableProps()}
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td css={css``} {...cell.getCellProps()}>
                          {cell.column.id != "122" ? (
                            cell.column.id == "nota" ? (
                              <EditCell
                                editedValue={
                                  updatedNotas.find(
                                    (n) =>
                                      n.estudianteId ==
                                      cell.row.original.estudianteId
                                  )?.puntaje || null
                                }
                                cell={cell}
                                onChange={(puntaje) => {
                                  onChange(
                                    cell.row.original.estudianteId,
                                    parseInt(puntaje)
                                  );
                                }}
                              />
                            ) : (
                              cell.render("Cell")
                            )
                          ) : (
                            <div>
                              <Upload />
                            </div>
                          )}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default NotasTable;
