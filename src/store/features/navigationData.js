import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfesorById } from "api/getProfesorById";
import { setLoading, setSnackbar } from "./main";
import { useNavigate, useParams } from "react-router-dom";
import { getMaterias } from "api/getMaterias";
import { getSecciones } from "api/secciones";

const mainSlice = createSlice({
  name: "navigationData",
  initialState: {
    profesor: undefined,
    seccion: undefined,
    materia: undefined,
    lapso: undefined,
    fetched: {
      profesor: false,
      seccion: false,
      materia: false,
      lapso: false,
    }
  },
  reducers: {
    setProfesorData: (state, { payload }) => {
      state.profesor = payload;
      state.fetched.profesor = true;
    },
    setSeccionData: (state, { payload }) => {
      state.seccion = payload;
      state.fetched.seccion = true;
    },
    setMateriaData: (state, { payload }) => {
      state.materia = payload;
      state.fetched.materia = true;
    },
    setLapsoData: (state, { payload }) => {
      state.lapso = payload;
      state.fetched.lapso = true;
    },
  },
});

// TODO a lo mejor se puede hacer esto mejor con una funcion que reciba el tipo de dato que va a hacer fetch
export const { setProfesorData, setSeccionData, setMateriaData, setLapsoData } =
  mainSlice.actions;

function useProfesorData() {
  const profesorSelector = useSelector((state) => state.navigationData.profesor);
  let fetched = useSelector((state) => state.navigationData.fetched.profesor);
  const params = useParams();

  if (fetched && params.profesorId && params.profesorId != profesorSelector) {
    fetched = false;
  }
  
  const dispatch = useDispatch();
  // Get the list of profesores and then find the one with the user ir in params
  useEffect(() => {
    if (!fetched) {
      dispatch(setLoading(true));
      getProfesorById(params.profesorId)
        .then((profesores) => profesores.find(
          (p) => p.id === parseInt(params.profesorId)
        ))
        .then((profesor) => {
          if (profesor) {
            dispatch(setProfesorData(profesor))
          }
          else { // maybe with async redux this would work and navigate?
            dispatch(setSnackbar(["El profesor de la url no existe", "warning"]));
            //const navigate = useNavigate();
            //navigate("/", { replace: true });
          }
        })
        .then(() => dispatch(setLoading(false)));
    }
  }, [fetched]);

  return profesorSelector;
}

function useSeccionData() {
  const seccionSelector = useSelector((state) => state.navigationData.seccion);
  let fetched = useSelector((state) => state.navigationData.fetched.seccion);
  const params = useParams();
  
  if (fetched && params.seccionId && params.seccionId != seccionSelector) {
    fetched = false;
  }

  const dispatch = useDispatch();
  // Get the list of secciones and then find the one with the seccionId in params
  useEffect(() => {
    if (!fetched) {
      dispatch(setLoading(true));
      getSecciones()
        .then((secciones) => secciones.find(
          (p) => p.id === parseInt(params.seccionId)
        ))
        .then((seccion) => {
          if (seccion) {
            dispatch(setSeccionData(seccion))
          }
          else { // maybe with async redux this would work and navigate?
            dispatch(setSnackbar(["La sección de la url no existe", "warning"]));
            //const navigate = useNavigate();
            //navigate("/", { replace: true });
          }
        })
        .then(() => dispatch(setLoading(false)));
    }
  }, [fetched]);

  return seccionSelector;
}

function useMateriaData() {
  const materiaSelector = useSelector((state) => state.navigationData.materia);
  let fetched = useSelector((state) => state.navigationData.fetched.materia);
  const params = useParams();

  if (fetched && params.materiaId && params.materiaId != materiaSelector) {
    fetched = false;
  }

  const dispatch = useDispatch();
  // Get the list of materias and then find the one with the seccionId in params
  useEffect(() => {
    if (!fetched) {
      dispatch(setLoading(true));
      getMaterias()
        .then((materias) => materias.find(
          (p) => p.id === parseInt(params.materiaId)
        ))
        .then((materia) => {
          if (materia) {
            dispatch(setMateriaData(materia))
          }
          else { // maybe with async redux this would work and navigate?
            dispatch(setSnackbar(["La materia de la url no existe", "warning"]));
            //const navigate = useNavigate();
            //navigate("/", { replace: true });
          }
        })
        .then(() => dispatch(setLoading(false)));
    }
  }, [fetched]);

  return materiaSelector;
}

function useLapsoData() {
  const lapsoSelector = useSelector((state) => state.navigationData.lapso);
  let fetched = useSelector((state) => state.navigationData.fetched.lapso);
  const params = useParams();
  
  if (fetched && params.lapso && params.lapso != lapsoSelector) {
    fetched = false;
  }

  const dispatch = useDispatch();
  // Get the list of lapsos and then find the one with the seccionId in params
  useEffect(() => {
    if (!fetched) {
      dispatch(setLoading(true));
      getLapso()
        .then((lapsos) => lapsos.find(
          (p) => p.id === parseInt(params.lapso)
        ))
        .then((lapso) => dispatch(setLapsoData(lapso)))
        .then(() => dispatch(setLoading(false)));
    }
  }, [fetched]);

  return lapsoSelector;
}

export { useProfesorData, useSeccionData, useMateriaData, useLapsoData };

export default mainSlice.reducer;
