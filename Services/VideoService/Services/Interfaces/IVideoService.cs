using MongoDB.Bson;
using VideoService.Models;

namespace VideoService.Services.Interfaces
{
    public interface IVideoService
    {
        IEnumerable<Video> GetVideos();
        Video? GetById(ObjectId id);
        void AddVideo(Video newVideo);
        void UpdateVideo(Video video);
        void DeleteVideo(ObjectId id);
    }
}
