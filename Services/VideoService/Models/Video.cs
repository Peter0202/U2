using MongoDB.Bson;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VideoService.Models
{
    [Collection("videos")]
    public class Video
    {
        public ObjectId Id { get; set; }

        [Required]
        public string? Title { get; set; }

    }
}
