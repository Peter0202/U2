
import { useState } from "react";
import { createVideo, getAllVideos } from "../api/videoApi";
import { useEffect } from "react";
import VideoList from "../components/VideoList";
import { Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../api/userApi";

function UserHome() {

    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState("dummy");
    const { user } = useAuth0();
    const newUser = localStorage.getItem("newUser");

    // if (newUser !== 'undefined') {
    //     const registerNewUser = async () => {
    //         await createUser(user.nickname).then(localStorage.removeItem("newUser"));
    //         console.log("created user");
    //     }

    //     useEffect(() => {
    //         registerNewUser();
    //     }, []);
    // }

    
    
    const refreshVideoList = () => {
        getAllVideos().then(videoList => {
            setVideos(videoList);

        }).catch(error => console.log(error));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createVideo(title, 8).then(res => {
            console.log(res);
        })

    }

    const textChanged = e => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        refreshVideoList();
    }, [videos]);

    return (
        <div>
            <h1>Users Page</h1>
            <div className="inner">
                <VideoList videos={videos} />
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="username" placeholder="title" onChange={textChanged} />
                </Form>
            </div>
        </div>
    )
}

export default UserHome;