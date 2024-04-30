using VideoService.Models;

namespace VideoService.Services
{
    public interface IVideoService
    {
        IEnumerable<Video> GetAllVideos();
        void AddVideo(Video newVideo);
    }
}
