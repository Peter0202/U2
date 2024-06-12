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

        private readonly ISender _rabbitMqSender;

        public VideoServiceController(ILogger<VideoServiceController> logger, IVideoService videoService, ISender rabbitMqSender)
        {
            _logger = logger;  
            _videoService = videoService;
            _rabbitMqSender = rabbitMqSender;
        }

        [HttpGet()]
        [ActionName("GetAllVideos")]
        public IEnumerable<Video> GetAllVideos()
        {
            List<Video> videos = _videoService.GetVideos().ToList();
            return _videoService.GetVideos();
   
        }

        [HttpGet()]
        [ActionName("GetVideo")]
        [Route("{title}")]
        public Video? GetVideo(string title)
        {
            return _videoService.GetByTitle(title);
        }

        [HttpGet()]
        [ActionName("GetVideoById")]
        [Route("{id}")]
        public Video? GetVideoById(string id)
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

            _rabbitMqSender.Send(newVideo);
        }

        [HttpDelete()]
        [Route("{title}")]
        public void Delete(string title)
        {
            _videoService.DeleteVideo(title);
        }

        [HttpPut()]
        [Route("{id}")]
        public void Put(string id)
        {
            Video? video = _videoService.GetById(id);
            if (video != null)
            {
                _videoService.UpdateVideo(video);
            }
        }
    }
}
