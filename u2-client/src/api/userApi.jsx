import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

const BASE_URL = 'http://48.217.13.145/api/UserService';


export const getAllUsers = async () => {
    try {
        const res = (await axios.get(BASE_URL + `/GetAllUsers`)).data;
        return res;
    }
    catch (err) {
        console.log(err);
    }
}

export const getUserByUsername = async (username) => {
    const roles = localStorage.getItem("roles")
    try {
        return (await axios.get(BASE_URL + `/GetByUsername/?username=${username}`, {headers: {"Roles": roles}})).data;
    }
    catch (err) {
        console.log(err);
    }
}

export const createUser = async (username) => {
    try {
        return (await axios.post(BASE_URL + `/Post/?username=${username}`));
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (id) => {
    try {
        return (await axios.delete(BASE_URL + `/Delete/?id=${id}`));
    }
    catch (err) {
        console.log(err);
    }
}