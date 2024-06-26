import axios from "axios";

const BASE_URL = 'https://www.u2.com/api/VideoService';

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

export const getVideosForUser = async (id) =>{
    try{
        return (await axios.get(BASE_URL + `/GetVideosForUser?id=${id}`)).data;
    }
    catch(err){
        console.log(err);
    }
}