using RabbitMQ.Client.Events;
using RabbitMQ.Client;
using VideoService.Services.Interfaces;
using System.Text;
using VideoService.Models;
using VideoService.Services;
using U2.Controllers;

namespace VideoService.RabbitMQ
{
    public class Consumer : IConsumer
    {
        private IModel? _channel;

        private readonly IVideoService _videoService;

        private void Configure()
        {
            var factory = new ConnectionFactory { HostName = "rabbitmq" };
            var connection = factory.CreateConnection();
            _channel = connection.CreateModel();

            _channel?.QueueDeclare(queue: "delete_user",
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);
        }

        public void Consume()
        {
            Console.WriteLine(" [*] Waiting for messages.");

            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);
                var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<User>(message);
                Console.WriteLine($" [x] Received {deserialized?.Id}");
                _videoService.DeleteVideosForUser(deserialized?.Id);
            };
            _channel.BasicConsume(queue: "delete_user",
                autoAck: true,
                consumer: consumer);
        }
        /// <summary>
        /// C`tor.
        /// </summary>
        public Consumer()
        {
            Configure();
        }
    }
}
