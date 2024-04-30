using Microsoft.EntityFrameworkCore;

namespace UserService.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

            optionBuilder.UseMySQL(configuration.GetConnectionString("UserDatabase"));
        }
    }
}
