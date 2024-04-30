using Microsoft.EntityFrameworkCore;

namespace UserService.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseMySQL("server=localhost;database=u2_users;uid=root;pwd=12345");
        }
    }
}
