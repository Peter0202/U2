using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using UserService.Models;
using VideoService.Models;
using VideoService.Services.Interfaces;

namespace VideoService.Services
{
    public class VideoService : IVideoService
    {
        private readonly AppDbContext _context;

        public VideoService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Video> GetVideos()
        {
            return _context.Video.AsNoTracking().AsEnumerable();
        }

        public Video? GetById(ObjectId id)
        {
            return _context.Video.FirstOrDefault(x => x.Id == id);
        }

        public void AddVideo(Video newVideo)
        {
            _context.Video.Add(newVideo);
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public void DeleteVideo(ObjectId id)
        {
            Video? video = GetById(id);
            if (video != null)
            {
                _context.Video.Remove(video);
            }
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }


        public void UpdateVideo(Video video)
        {
            _context.Update(video);
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }
    }
}
