using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VideoService.Models
{
    [Collection("videos")]
    public class Video
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public int? PosterId { get; set; }

    }
}
