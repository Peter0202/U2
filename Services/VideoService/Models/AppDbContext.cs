using Microsoft.EntityFrameworkCore;
using VideoService.Models;

namespace VideoService.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Video> Video { get; set; }


        public AppDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Video>();
        }
    }
}
