

function Video (props) {
    return(
        <div className="row border-0">
            <div className="Bootstrap-Card" style={{border: "2px solid", borderRadius: "25px", display: "flex", justifyContent:"center"}}>
                <h3>{props.video.title}</h3>
            </div>
        </div>
    )
}

export default Video;