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
        private readonly ISender _rabbitMqSender;

        public UserServiceController(ILogger<UserServiceController> logger, IUserService userService, ISender rabbitMqSender)
        {
            _logger = logger;
            _userService = userService;
            _rabbitMqSender = rabbitMqSender;
        }

        [HttpGet()]
        [ActionName("GetUser")]
        public User? GetUser([FromQuery]int? id)
        {
            User? user = _userService.GetById(id.GetValueOrDefault());
            return user;              
        }

        [HttpGet()]
        [ActionName("GetAllUsers")]
        public IEnumerable<User> GetAll()
        {
            return _userService.GetUsers();
        }

        [HttpPost()]
        public void Post([FromQuery]string? username)
        {
            User user = new User();
            user.Username = username!;
            _userService.AddUser(user);
        }

        [HttpDelete()]
        public void Delete([FromQuery]int? id)
        {
            User? user = _userService.GetById(id.GetValueOrDefault());
            if (user != null)
            {
                _userService.DeleteUser(user);
                _rabbitMqSender.Send(user);
            }
        }

        [HttpPut()]
        public void Put([FromQuery]int? id) 
        {
            User? user = _userService.GetById(id.GetValueOrDefault());
            if (user != null)
            {
                _userService.UpdateUser(user);
            }
        }

    }
}
