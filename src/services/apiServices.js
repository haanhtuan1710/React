import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}

const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}

const putViewUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}

const deleteUser = (UserId) => {
    return axios.delete('api/v1/participant', { data: { id: UserId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (userEmail, userPassword) => {
    return axios.post(`api/v1/login`, { email: userEmail, password: userPassword, delay: 2000 });
}

const postRegister = (userEmail, userPassword, userUsername) => {
    return axios.post(`api/v1/register`, { email: userEmail, password: userPassword, username: userUsername });
}
const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}

export {
    postCreateNewUser, getAllUser, putUpdateUser, putViewUser, deleteUser,
    getUserWithPaginate, postLogin, postRegister, getQuizByUser
}