import axios from "axios";

const API = "http://localhost:8080/users";

export const getUsers = () => axios.get(API);
export const addUser = (data) => axios.post(API, data);
export const updateStatus = (id) => axios.put(`${API}/${id}`);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);