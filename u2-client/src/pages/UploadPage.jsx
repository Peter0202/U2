import { useState } from "react";
import { createVideo, getAllVideos } from "../api/videoApi";
import { useEffect } from "react";
import VideoList from "../components/VideoList";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";

function UploadPage() {
    const [title, setTitle] = useState("dummy");
    const userId = localStorage.getItem("Id");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createVideo(title, userId).then(res => {
            console.log(res);
        })
        document.getElementById('upload-form').reset();
    }

    const textChanged = e => {
        setTitle(e.target.value);
    }

    return (
        <div style={{border:"1px solid", borderRadius: "25px"}}>
            <h2>Upload a video</h2>
            <Form id="upload-form" style={{display:"flex", alignItems:"center", flexDirection:"column"}} onSubmit={handleSubmit}>
                <Form.Control style={{width:"80%"}} type="username" placeholder="Title" onChange={textChanged}/>
                <Button style={{width:"80%"}} variant="outlined" type="submit">Upload</Button>
            </Form>
        </div>
    )
}

export default UploadPage;