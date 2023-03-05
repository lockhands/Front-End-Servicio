import axios from 'axios';

export const getClases = (id) => {
    return axios
        .get(`/admin/profesores/${id}/clases`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};