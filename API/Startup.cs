namespace API
{
    using System.IO;
    using API.Extensions;
    using API.Helpers;
    using API.Middleware;
    using AutoMapper;
    using Infrastructure.Data;
    using Infrastructure.Identity;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.FileProviders;
    using StackExchange.Redis;

    public class Startup
    {
        private readonly IConfiguration configuration;
        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        // public IConfiguration Configuration { get; }

        public void ConfigureDevelopmentServices(IServiceCollection services)
        {
            services.AddDbContext<StoreContext>(options =>
                options.UseSqlServer(
                    this.configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<AppIdentityDbContext>(x => 
            {
                x.UseSqlServer(this.configuration.
                    GetConnectionString("IdentityConnection"));
            });

            ConfigureServices(services);

            // services.AddDbContext<StoreContext>(x => x.UseSqlite(
            //     this.configuration.GetConnectionString("DefaultConnection")));
            
            // services.AddDbContext<AppIdentityDbContext>(x => 
            // {
            //     x.UseSqlite(this.configuration.
            //         GetConnectionString("IdentityConnection"));
            // });
        }

        // public void ConfigureProductionServices(IServiceCollection services)
        // {
        //     services.AddDbContext<StoreContext>(options =>
        //         options.UseSqlServer(
        //             this.configuration.GetConnectionString("DefaultConnection")));
        //     services.AddDbContext<AppIdentityDbContext>(x => 
        //     {
        //         x.UseSqlServer(this.configuration.
        //             GetConnectionString("IdentityConnection"));
        //     });

        //     ConfigureServices(services);
        // }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(MappingProfiles));

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                options
                    .SerializerSettings
                    .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );

            services.AddSingleton<IConnectionMultiplexer>(c => 
            {
                var configuration = ConfigurationOptions.Parse(this.configuration
                    .GetConnectionString("Redis"), true);

                return ConnectionMultiplexer.Connect(configuration);
            });
            
            services.AddApplicationServices();
            services.AddIdentityServices(this.configuration);
            services.AddSwaggerDocumentation();
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("https://localhost:4200");
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ExceptionMiddleware>();
            app.UseStatusCodePagesWithReExecute("/errors/{0}");
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles();
            // app.UseStaticFiles(new StaticFileOptions
            // {
            //     FileProvider = new PhysicalFileProvider
            //     (
            //         Path.Combine(Directory.GetCurrentDirectory(), "NEW-DIRECTORY-WITH-STATIC-FILES")
            //     ),
            //     RequestPath = "/NAME-OF-DIRECTORY-LOWERCASE"
            // });
            // change url in appsettings.Development.json ->"ApiUrl": "https://localhost:5001/NAME-OF-DIRECTORY"

            app.UseCors("CorsPolicy");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseSwaggerDocumentation();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fallback");
            });
        }
    }
}
