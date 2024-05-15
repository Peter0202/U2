import axios from 'axios'
 
const url = `${import.meta.env.VITE_GW_ROOT_URL}`;

export const getUserMetadata = async (id) => {
    try{
        const res = ((await axios.get(url + 'users/{id}')).data);
        console.log(res);
        return res;
    }
    catch(err){
        console.log("Service not running.")
    }
} 