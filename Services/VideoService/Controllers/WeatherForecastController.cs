using Microsoft.AspNetCore.Mvc;
using UserService.Models;
using VideoService.Models;
using VideoService.Services;

namespace U2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IVideoService _videoService;
       
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IVideoService videoService)
        {
            _logger = logger;  
            _videoService = videoService;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<Video> Get()
        {
            return _videoService.GetAllVideos();
        }

        [HttpPost()]
        [Route("api/{title}")]
        public void Post(string title)
        {
            Video newVideo = new Video()
            {
                Title = title
            };
            _videoService.AddVideo(newVideo);
        }
    }
}
