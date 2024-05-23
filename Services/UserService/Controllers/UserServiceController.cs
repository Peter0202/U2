using Microsoft.AspNetCore.Mvc;
using UserService.Models;
using UserService.Services.Interfaces;

namespace UserService.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserServiceController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserServiceController> _logger;

        public UserServiceController(ILogger<UserServiceController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet()]
        [ActionName("GetUser")]
        [Route("{id}")]
        public User? GetUser(int id)
        {
            User? user = _userService.GetById(id);
            return user;              
        }

        [HttpGet()]
        [ActionName("GetAllUsers")]
        public IEnumerable<User> GetAll()
        {
            return _userService.GetUsers();
        }

        [HttpPost()]
        [Route("{username}")]
        public void Post(string username)
        {
            User user = new User();
            user.Username = username;
            _userService.AddUser(user);
        }

        [HttpDelete()]
        [Route("{id}")]
        public void Delete(int id)
        {
            User? user = _userService.GetById(id);
            if (user != null)
            {
                _userService.DeleteUser(user);
            }
        }

        [HttpPut()]
        [Route("{id}")]
        public void Put(int id) 
        {
            User? user = _userService.GetById(id);
            if (user != null)
            {
                _userService.UpdateUser(user);
            }
        }

    }
}
