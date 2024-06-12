import axios from 'axios'

const url = 'http://51.8.195.62/api/UserService/GetAllUsers'

export const getAllUsers = async () => {
    try {
        const res = (await axios.get(url)).data;
        return res;
    }
    catch(err){
        console.log(err);
    }
}

export const createUser = async (username) =>{
    try{
        return (await axios.post(`http://localhost:80/api/UserService/Post/${username}`));
    }
    catch(err){
        console.log(err);
    }
}

export const deleteUser = async (id) => {
    try{
        return (await axios.delete(`http://localhost:80/api/UserService/Delete/${id}`));
    }
    catch(err){
        console.log(err);
    }
}