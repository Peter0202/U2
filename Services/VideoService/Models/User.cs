namespace VideoService.Models
{
    public class User
    {
        public int Id { get; internal set; }
        public string Username { get; internal set; }

        public User (int id, string username)
        {
            Id = id;
            Username = username;
        }
    }
}
