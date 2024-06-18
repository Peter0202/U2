using RabbitMQ.Client;
using System.Text;
using UserService.Services.Interfaces;

namespace UserService.RabbitMQ
{
    public class ProducerService : ISender
    {
        private IModel? _channel;

        /// <summary>
        /// Declares the configuration of the sender.
        /// </summary>
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

        /// <summary>
        /// Sends a message to the message queue.
        /// </summary>
        public void Send(object? message)
        {
            ArgumentNullException.ThrowIfNull(message);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(message);
            var body = Encoding.UTF8.GetBytes(json);
            Console.WriteLine("Sending message!!!!");
            _channel.BasicPublish(exchange: string.Empty,
                routingKey: "delete_user",
                basicProperties: null,
                body: body);
        }
        /// <summary>
        /// C`tor.
        /// </summary>
        /// 
        public ProducerService()
        {
            Configure();
        }
    }
}
