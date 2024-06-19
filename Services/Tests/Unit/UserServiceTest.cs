using UserService.Models;
using UserService.Services;
using UserService.Services.Interfaces;

namespace Unit
{
    public class Tests
    {

        [SetUp]
        public void Setup()
        {
            
        }

        [Test]
        [TestCase(25000)]
        [TestCase(50000)]
        [TestCase(-10023)]
        [TestCase(-23)]
        public void TestNumberIsNotZero(int number)
        {
            Assert.That(number, Is.Not.Zero);
        }
    }
}