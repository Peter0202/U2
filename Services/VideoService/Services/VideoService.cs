using Microsoft.EntityFrameworkCore;
using UserService.Models;
using VideoService.Models;

namespace VideoService.Services
{
    public class VideoService : IVideoService
    {
        private readonly AppDbContext _context;

        public VideoService(AppDbContext context)
        {
            _context = context;
        }

        public void AddVideo(Video newVideo)
        {
            _context.Video.Add(newVideo);
            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public IEnumerable<Video> GetAllVideos()
        {
            return _context.Video.AsNoTracking().AsEnumerable();
        }
    }
}
