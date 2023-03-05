import axios from 'axios';

export const getSecciones = () => {
    return axios
        .get('/admin/secciones')
        .then((res) => res.data)
        .catch((err) => console.log(err));
};