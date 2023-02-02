import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';
import { getClases } from '../api/profesores_clases';
import { useLocation } from 'react-router-dom';
import { INFO_CLASES } from '../components/tables/INFO_CLASES';
import { getProfesores } from '../api/profesores';

function Profesor_Clases() {

  const [clases,setClase] = useState([])
  const [profesor,setProfesor] = useState([])

  const {state}=useLocation()
  const params=useParams();

  useEffect( () =>{

    const fetchClases= async () => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + "NjU.6L5VwGevxF-BNvrRFlItcVoKG4SFAwZE1b4RhzxjwyXwyl7ggx37oQZlUNwd";
        
        const ClasesRes = await getClases(params.id);
        const ProfesoresRes= await getProfesores();
          setProfesor(ProfesoresRes);   
          setClase(ClasesRes);
        };
       
        fetchClases();
      
  },[])


  return (

      <Container>

      <Navbar names={state} />
  
    
        <h1>Administración de profesores</h1>
       

        <Typography> {profesor.map( element => {
           
            if(element.id == params.id){
                 return `Clases del profesor:  ${element.nombre} ${element.apellido}`
            }
        })  
        } 
        </Typography>

       <INFO_CLASES datos={clases}/>

        <br></br>

        <h3>Añadir clase</h3>
      </Container>
 
  )
}

export default Profesor_Clases