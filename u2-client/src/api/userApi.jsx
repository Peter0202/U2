import axios from 'axios'

const url = 'http://localhost:80/api/UserService/GetAllUsers'

export const getAllUsers = async () => {
    try {
        const res = (await axios.get(url)).data;
        return res;
    }
    catch(err){
        console.log(err);
    }
}