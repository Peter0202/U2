import axios from 'axios'

const url = 'http://localhost:80/api/UserService/GetAllUsers';
const BASE_URL = 'http://localhost:80/api/UserService';
export const getAllUsers = async () => {
    try {
        const res = (await axios.get(BASE_URL + `/GetAllUsers`)).data;
        return res;
    }
    catch(err){
        console.log(err);
    }
}

export const createUser = async (username) =>{
    try{
        return (await axios.post(BASE_URL + `/Post/?username=${username}`));
    }
    catch(err){
        console.log(err);
    }
}

export const deleteUser = async (id) => {
    try{
        return (await axios.delete(BASE_URL + `/Delete/?id=${id}`));
    }
    catch(err){
        console.log(err);
    }
}