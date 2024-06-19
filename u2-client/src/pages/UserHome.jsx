
import { useState } from "react";
import { createVideo, getAllVideos } from "../api/videoApi";
import { useEffect } from "react";
import VideoList from "../components/VideoList";
import { Form } from "react-bootstrap";

function UserHome() {

    const [videos, setVideos] = useState([]);

    
    const refreshVideoList = () => {
        getAllVideos().then(videoList => {
            setVideos(videoList);

        }).catch(error => console.log(error));
    }

    

    useEffect(() => {
        refreshVideoList();
    }, [videos]);

    return (
        <div>
            <h1>Users Page</h1>
            <div className="inner">
                <VideoList videos={videos} />               
            </div>
        </div>
    )
}

export default UserHome;