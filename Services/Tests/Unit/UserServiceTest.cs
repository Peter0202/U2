using UserService.Models;
using UserService.Services;
using UserService.Services.Interfaces;

namespace Unit
{
    public class Tests
    {
        private UserService.Services.UserService? _mockUserService;
        [SetUp]
        public void Setup()
        {
            _mockUserService = new UserService.Services.UserService(null);
        }

        [Test]
        public void Test1()
        {
            User user = new User();
            user.Username = "test";
            _mockUserService.AddUser(user);
            Assert.That(_mockUserService.GetUsers().Count, Is.Not.Zero);
        }
    }
}