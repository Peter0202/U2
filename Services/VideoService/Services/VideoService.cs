using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver.Linq;
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

        public Video? GetByTitle(string title)
        {
            return _context.Video.FirstOrDefault(x => x.Title == title);
        }

        public void AddVideo(Video newVideo)
        {
            _context.Video.Add(newVideo);
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public void DeleteVideo(string title)
        {
            Video? video = GetByTitle(title);
            if (video != null)
            {
                _context.Video.Remove(video);
            }
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public void DeleteVideosForUser(int? posterId)
        {
            if (posterId != null)
            {
                var videosForUser = GetVideos().Where(x => x.PosterId == posterId);
                foreach (var video in videosForUser)
                {
                    _context.Video.Remove(video);
                }
                _context.ChangeTracker.DetectChanges();
                _context.SaveChanges();
            }
        }


        public void UpdateVideo(Video video)
        {
            _context.Video.Update(video);
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public Video? GetById(string id)
        {
            return _context.Video.FirstOrDefault(x => x.Id == ObjectId.Parse(id));
        }
    }
}
