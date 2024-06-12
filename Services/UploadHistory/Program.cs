using UploadHistory.Models;
var builder = WebApplication.CreateBuilder(args);
const string allowSpecificOrigins = "dev";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins, policy =>
    {
        policy.AllowAnyOrigin();
        policy.AllowAnyHeader();
        policy.WithOrigins("*", "http://localhost:3000").WithMethods("GET", "POST", "DELETE", "PUT");
    });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    try
    {
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        context.Database.EnsureCreated();
    }
    catch
    {

    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
