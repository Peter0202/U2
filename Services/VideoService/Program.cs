using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UserService.Models;
using VideoService.Models;
using VideoService.RabbitMQ;
using VideoService.Services;
using VideoService.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);
var allowSpecificOrigins = "dev";



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policy =>
        {
            policy.AllowAnyOrigin();
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
        });
});

//MongoDb settings setup
var mongoDbSettings = builder.Configuration.GetSection("MongoDbSettings").Get<MongoDbSettings>();
builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddDbContext<AppDbContext>(options =>
options.UseMongoDB(mongoDbSettings.AtlasURI ?? "", mongoDbSettings.DatabaseName ?? ""));

builder.Services.AddSingleton<ISender, ProducerService>();



builder.Services.AddScoped<IVideoService, VideoService.Services.VideoService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(allowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
optionsBuilder.UseMongoDB(mongoDbSettings.AtlasURI ?? "", mongoDbSettings.DatabaseName ?? "");
var _context = new AppDbContext(optionsBuilder.Options);

var consumer = new Consumer(new VideoService.Services.VideoService(_context));
consumer.Consume();

app.Run();
