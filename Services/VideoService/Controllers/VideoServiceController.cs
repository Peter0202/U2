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
        [Route("{title}")]
        public Video? GetVideo(string title)
        {
            return _videoService.GetByTitle(title);
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
        [Route("{title}")]
        public void Delete(string title)
        {
            _videoService.DeleteVideo(title);
        }

        [HttpPut()]
        [Route("{title}")]
        public void Put(string title)
        {
            Video? video = _videoService.GetByTitle(title);
            if (video != null)
            {
                _videoService.UpdateVideo(video);
            }
        }
    }
}
