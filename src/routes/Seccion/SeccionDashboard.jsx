import React, { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getSecciones } from "../../api/secciones";
import AcordionAños from "../../components/acordion/AcordionAños";

function SeccionDashboard() {
	const navigate = useNavigate();

	var item = {
		año: 1,
		secciones: ["a", "b", "c", "d"],
	};
	const { state } = useLocation();
	const [años, setAños] = useState([]);
	const [secciones, setSecciones] = useState([]);

	const handleClick = () => {
		navigate("crear", { state: state });
	};

	useEffect(() => {
		const fetchClases = async () => {
			const ProfesoresRes = await getSecciones();
			ProfesoresRes.reverse();

			const PrimerAño = ProfesoresRes.filter((el) => {
				if (el.año === 1) {
					return el;
				}
			});

			const SegundoAño = ProfesoresRes.filter((el) => {
				if (el.año === 2) {
					return el;
				}
			});

			const TerceroAño = ProfesoresRes.filter((el) => {
				if (el.año === 3) {
					return el;
				}
			});

			const CuartoAño = ProfesoresRes.filter((el) => {
				if (el.año === 4) {
					return el;
				}
			});

			const QuintoAño = ProfesoresRes.filter((el) => {
				if (el.año === 5) {
					return el;
				}
			});

			setSecciones([
				...secciones,
				PrimerAño,
				SegundoAño,
				TerceroAño,
				CuartoAño,
				QuintoAño,
			]);

			// setSecciones(TercerAño);
			//  setSecciones(CuartoAño);
			//  setSecciones(QuintoAño);
			/* ProfesoresRes.map(it =>{
                    if(it.año !== numero){
                        
                        
                        console.log(secciones);
                        if (numero !== 0) {
                            setSecciones(secciones.push(objectjson))
                        
                        }
                       

                        numero=it.año;
                        objectjson={"año":numero,
                        secciones: [],}
                        objectjson.secciones.push(it.codigo);
                    } 
                    else{
                        objectjson.secciones.push(it.codigo);
                    }
                    
                })*/
		};

		fetchClases();
	}, []);

	console.log(secciones);
	return (
		<Container>
			<Navbar names={state} />
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<AcordionAños años={secciones} />

			<Button onClick={handleClick}> Crear Nueva sección</Button>
		</Container>
	);
}

export default SeccionDashboard;
