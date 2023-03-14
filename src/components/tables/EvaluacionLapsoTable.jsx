import { css } from "@emotion/react";
import { Book, Visibility } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import THead from "../molecules/THead";

function EvaluacionLapsoTable({ claseId, materiaData = {} }) {
  const columns = useMemo(
    () => [
      { Header: "Lapso", accessor: "lapso" },
      { Header: "Acción", accessor: "accion" },
    ],
    []
  );

  const data = useMemo(
    () => [
      { lapso: "Lapso 1", lapsoNumber: 1 },
      { lapso: "Lapso 2", lapsoNumber: 2 },
      { lapso: "Lapso 3", lapsoNumber: 3 },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div
      css={css`
        h2 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        width: 50%;
        margin: 1rem auto;
      `}
    >
      <Typography variant="h2">Evaluaciones por Lapso</Typography>
      <table
        css={css`
          td,
          th {
            text-align: center;
          }
        `}
        {...getTableProps()}
      >
        <THead headerGroups={headerGroups} />
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
                        <td {...cell.getCellProps()}>
                          {cell.value ? (
                            cell.render("Cell")
                          ) : (
                            <div
                              css={css`
                                display: flex;
                                justify-content: center;
                                svg {
                                  margin: 0 1rem;
                                }
                              `}
                            >
                              <Link
                                state={{ ...materiaData }}
                                to={`lapsos/${cell.row.original.lapsoNumber}/evaluaciones`}
                              >
                                <Visibility />
                              </Link>

                              <Book />
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

export default EvaluacionLapsoTable;
