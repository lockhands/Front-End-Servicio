import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GoBackButton from "../../components/atoms/GoBackButton";
import ClaseInfo from "../../components/organisms/ClaseInfo";
import ProfesorEvaluacionesTable from "../../components/tables/ProfesorEvaluacionesTable";

function ClaseEvaluaciones() {
  const [evaluaciones, setEvaluaciones] = useState([]);

  const {
    state: { materia, clase },
  } = useLocation();

  const { lapso } = useParams();

  console.log(`Este es ${lapso}`);

  useEffect(() => {
    axios
      .get(`/profesor/materias/${materia.id}/evaluaciones/lapsos/${lapso}`)
      .then(
        (response) => setEvaluaciones(response.data) || console.log(response)
      )
      .catch((err) => null);
  }, []);

  return (
    <div>
      <GoBackButton to="prev" />
      <ClaseInfo
        materia={materia.nombre}
        año={materia.año}
        seccion={clase.seccion.codigo}
      />
      <ProfesorEvaluacionesTable
        lapso={lapso}
        materia={materia}
        clase={clase}
        data={evaluaciones.map((e) => ({ evaluacion: e.titulo, fulldata: e }))}
      />
    </div>
  );
}

export default ClaseEvaluaciones;
