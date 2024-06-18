using Microsoft.EntityFrameworkCore;
using UserService.Models;
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

var consumer = new Consumer();
consumer.Consume();

app.Run();
