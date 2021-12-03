using help_car.model;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddCors(options => options.AddDefaultPolicy(builder => builder.WithOrigins("**").AllowAnyHeader().AllowAnyMethod()));
builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql("server=ec2-34-235-152-111.compute-1.amazonaws.com; database=site;user=site;password=gerald;Persist Security Info=False;Convert Zero Datetime=True",
    Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.27-mysql")));

var app = builder.Build();




// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();

app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
