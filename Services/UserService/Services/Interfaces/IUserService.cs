using UserService.Models;

namespace UserService.Services.Interfaces
{
    public interface IUserService
    {
        IEnumerable<User> GetUsers();
        User? GetById(int id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(User user);
    }
}
