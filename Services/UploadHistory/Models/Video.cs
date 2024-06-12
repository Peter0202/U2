namespace UploadHistory.Models
{
    public class Video
    {
        public string Id { get; internal set; }
        public string Title { get; internal set; }

        public Video(string id, string title)
        {
            Id = id;
            Title = title;
        }
    }
}
