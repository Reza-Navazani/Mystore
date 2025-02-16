
using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt=>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

builder.Services.AddCors();

var app = builder.Build();
app.UseCors(opt =>{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});
// Configure the HTTP request pipeline.
DbInitializer.InitDb(app);
app.MapControllers();

app.Run();
