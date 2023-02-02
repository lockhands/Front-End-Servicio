import React from 'react'
import { useTable } from 'react-table'
import { useState, useEffect, useMemo } from 'react';
import {INFO_PROFESOR} from './columnas';
import { useNavigate } from 'react-router-dom';


import '../../css/tablas.css';


export function INFO_PROFESORES({datos,navbar}) {
 //   const [data, setData] = useState([]);

    console.log("Hola")
    const navigate=useNavigate();
    const columns = useMemo(() => INFO_PROFESOR);

    const data = useMemo(()=> datos);
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =    useTable({ columns, data });

    const informacion = (id) =>{
        navigate(`/admin/profeores/${id}/clases`,{state: navbar})
    }


    return (
        <div className="container">
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
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

                                if(typeof(cell.value)!=="number") return (
                                    <td {...cell.getCellProps()}>
                                     {cell.render('Cell')}
                                    </td>
                                      
                                );
                                else return(
                                    <td {...cell.getCellProps()}>
                                          <button onClick={ () => {informacion(cell.value)}}>Enviar</button>
                                    </td>
                                    
                                )
                            })}
                          
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
  
}
