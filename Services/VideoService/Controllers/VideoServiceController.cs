using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using VideoService.Models;
using VideoService.Services.Interfaces;

namespace U2.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class VideoServiceController : ControllerBase
    {

        private readonly IVideoService _videoService;
       
        private readonly ILogger<VideoServiceController> _logger;

        public VideoServiceController(ILogger<VideoServiceController> logger, IVideoService videoService)
        {
            _logger = logger;  
            _videoService = videoService;
        }

        [HttpGet()]
        [ActionName("GetAllVideos")]
        public IEnumerable<Video> GetAll()
        {
            return _videoService.GetVideos();
        }

        [HttpGet()]
        [ActionName("GetVideo")]
        [Route("{id}")]
        public Video? GetVideo(ObjectId id)
        {
            return _videoService.GetById(id);
        }

        [HttpPost()]
        [Route("{title}")]
        public void Post(string title)
        {
            Video newVideo = new Video()
            {
                Title = title
            };
            _videoService.AddVideo(newVideo);
        }

        [HttpDelete()]
        [Route("{id}")]
        public void Delete(ObjectId id)
        {
            _videoService.DeleteVideo(id);
        }

        [HttpPut()]
        [Route("{id}")]
        public void Put(ObjectId id)
        {
            Video? video = _videoService.GetById(id);
            if (video != null)
            {
                _videoService.UpdateVideo(video);
            }
        }
    }
}
