import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const FormData = require('form-data');

    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', image);

    return axios.post('api/v1/participant', form) // header of url customized in utils 
}
const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}
export { postCreateNewUser, getAllUsers }