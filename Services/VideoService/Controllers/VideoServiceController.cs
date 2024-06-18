using Microsoft.AspNetCore.Authorization;
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
        public Video? GetVideo([FromQuery] string? title)
        {
            if (title == String.Empty)
            {
                return null;
            }
            return _videoService.GetByTitle(title!);
        }

        [HttpGet()]
        [ActionName("GetVideoById")]
        public Video? GetVideoById([FromQuery]string? id)
        {
            return _videoService.GetById(id!);
        }

        [HttpPost()]
        public void Post([FromQuery] string? title, [FromQuery] int? posterId)
        {
            Video newVideo = new Video()
            {
                Title = title,
                PosterId = posterId
            };
            _videoService.AddVideo(newVideo);

            _rabbitMqSender.Send(newVideo);
        }

        [HttpDelete()]
        public void Delete([FromQuery]string? title)
        {
            _videoService.DeleteVideo(title!);
        }

        [HttpPut()]
        public void Put([FromQuery]string? id)
        {
            Video? video = _videoService.GetById(id!);
            if (video != null)
            {
                _videoService.UpdateVideo(video);
            }
        }
    }
}
