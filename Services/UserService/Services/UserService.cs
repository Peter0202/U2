using UserService.Models;
using UserService.Services.Interfaces;

namespace UserService.Services
{
    public class UserService : IUserService
    {

        private readonly AppDbContext _appDbContext;
        public UserService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void AddUser(User user)
        {
            _appDbContext.User.Add(user);
            _appDbContext.SaveChanges();
        }

        public void DeleteUser(User user)
        {
            _appDbContext.User?.Remove(user);
            _appDbContext.SaveChanges();
        }

        public User? GetById(int id)
        {
            User? user = _appDbContext.User.FirstOrDefault(x => x.Id == id);
            return user;
        }

        public IEnumerable<User> GetUsers()
        {
            return _appDbContext.User.ToList();
        }

        public User? GetByUsername(string username)
        {
            User? user = _appDbContext.User.FirstOrDefault(x => x.Username == username);
            return user;
        }

        public void UpdateUser(User user)
        {
            _appDbContext.User.Update(user);
        }
    }
}
