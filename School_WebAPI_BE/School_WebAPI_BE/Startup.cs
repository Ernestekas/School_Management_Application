using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using School_WebAPI_BE.Data;
using School_WebAPI_BE.Repositories;
using School_WebAPI_BE.Services;
using School_WebAPI_BE.Validation;

namespace School_WebAPI_BE
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            var defaultConnection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<DataContext>(d => d.UseSqlServer(defaultConnection));

            services.AddTransient<SchoolService>();
            services.AddTransient<SchoolRepository>();

            services.AddTransient<StudentService>();
            services.AddTransient<StudentRepository>();

            services.AddTransient<SchoolValidator>();
            services.AddTransient<StudentValidator>();

            services.AddAutoMapper(typeof(MappingProfiles));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "School_WebAPI_BE", Version = "v1" });
            });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(builder => builder
                 .AllowAnyOrigin()
                 .AllowAnyMethod()
                 .AllowAnyHeader());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "School_WebAPI_BE v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
