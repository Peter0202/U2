import Video from "../components/Video"


function VideoList (props) {
    return(
        <div className="column">
            {props.videos.map(video => (
                    <Video key={video.title} video={video} />
                ))}
        </div>
    )
}

export default VideoList;