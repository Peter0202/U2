using Microsoft.EntityFrameworkCore;

namespace UploadHistory.Models
{
    public class AppDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

            optionBuilder.UseMySQL(configuration.GetConnectionString("UploadDatabase"));
        }
    }
}
