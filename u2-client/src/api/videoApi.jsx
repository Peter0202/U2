import axios from "axios";

const BASE_URL = 'http://51.8.195.62/api/VideoService';

export const getAllVideos = async () =>{
    try{
        const res = (await axios.get(BASE_URL + `/GetAllVideos`)).data
        return res;
    }
    catch(err){
        console.log(err);
    }
}

export const createVideo = async (title, posterId) => {
    try{
        return (await axios.post(BASE_URL + `/Post?title=${title}&posterId=${posterId}`))
    }
    catch(err){
        console.log(err);
    }
}