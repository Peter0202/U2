import { useEffect, useState } from "react";
import { getVideosForUser } from "../api/videoApi";
import VideoList from "../components/VideoList";

function UserVideos() {

    const [videos, setVideos] = useState([]);
    const userId = localStorage.getItem("Id");
    const refreshVideoList =  () => {
         getVideosForUser(userId).then(videoList => {
            setVideos(videoList);
        });
    }

    useEffect(() => {
        refreshVideoList();
    }, [videos])

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>My Videos</h1>
            <div className="inner">
                <VideoList videos={videos} />               
            </div>
        </div>
    )
}

export default UserVideos;