import axios from "axios";

const BASE_URL = 'http://localhost:80/api/VideoService';

export const getAllVideos = async () =>{
    try{
        const res = (await axios.get(BASE_URL + `/GetAllVideos`)).data
        return res;
    }
    catch(err){
        console.log(err);
    }
}

export const createVideo = async (title) => {
    try{
        return (await axios.post(BASE_URL + `/Post?title=${title}`))
    }
    catch(err){
        console.log(err);
    }
}