using RabbitMQ.Client.Events;
using RabbitMQ.Client;
using UploadHistory.Models.Interfaces;
using System.Text;
using UploadHistory.Models;

namespace UploadHistory.RabbitMQ
{
    public class Consumer : IConsumer
    {
        private IModel? _channel;
        private void Configure()
        {
            var factory = new ConnectionFactory { HostName = "rabbitmq" };
            var connection = factory.CreateConnection();
            _channel = connection.CreateModel();

            _channel?.QueueDeclare(queue: "hello",
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
                var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<Video>(message);
                Console.WriteLine($" [x] Received {deserialized?.Title}");
            };
            _channel.BasicConsume(queue: "hello",
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
