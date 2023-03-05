import React from 'react'
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import SelectAño from '../../components/Select/SelectAño';
import GoBackButton from '../../components/atoms/GoBackButton';

function SeccionCrear(){
    const {state}=useLocation();
    return(
        <div>
               <GoBackButton to={"prev"} />

                <Typography>Crear sección</Typography>
                
               
                
        <SelectAño />

        </div>
    );
};

export default SeccionCrear;

