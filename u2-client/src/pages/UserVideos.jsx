import { useState } from "react";
import { getAllVideos } from "../api/videoApi";

function UserVideos() {

    const [videos, setVideos] = useState([]);

    const refreshVideoList = async () => {
        await getAllVideos().then(allVideos =>{
            
        });
    }

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2>My Videos</h2>
        </div>
    )
}

export default UserVideos;