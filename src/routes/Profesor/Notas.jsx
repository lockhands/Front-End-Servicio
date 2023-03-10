import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "../../components/atoms/GoBackButton";
import ClaseInfo from "../../components/organisms/ClaseInfo";
import NotasTable from "../../components/tables/NotasTable";

function Notas() {
  const [notas, setNotas] = useState([]);

  const {
    state: { clase, materia, evaluacion },
  } = useLocation();


  const fetchNotas = () => {
    axios
      .get(
        `/profesor/clases/${clase.id}/evaluaciones/${evaluacion.id}/calificaciones`
      )
      .then((response) => setNotas(response.data) || console.log(response))
      .catch((err) => null);
  }

  useEffect(() => {
    fetchNotas()
  }, []);



  return (
    <div>
      <GoBackButton to="prev" />
      <ClaseInfo
        materia={materia.nombre}
        año={materia.año}
        seccion={clase.seccion.codigo}
      />

      <NotasTable
        refetch={ () => fetchNotas() }
        info={{evaluacion,clase,materia}}
        data={notas.map((n) => ({
          estudianteId: n.estudianteId,
          fullname: n.nombre + " " + n.apellido,
          cedula: "V" + n.cedula,
          nota: n.puntaje === null ? "No Asignado" : n.puntaje,
        }))}
      />
    </div>
  );
}

export default Notas;
