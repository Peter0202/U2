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
            Assert.That(1, Is.Not.Zero);
        }
    }
}