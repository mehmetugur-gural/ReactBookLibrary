using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using ReactBookLibrary.DbModels;

namespace ReactBookLibrary
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EfContext>(opt => opt.UseInMemoryDatabase("bookDb"));
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, EfContext efContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                name: "default",
                template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseStatusCodePagesWithRedirects("/error");

            AddTestData(efContext);
        }

        private static void AddTestData(EfContext context)
        {
            var bookCategory1 = new DbModels.BookCategory
            {
                Id = 1,
                Name = "Novel"
            };

            context.BookCategories.Add(bookCategory1);

            var author1 = new DbModels.Author
            {
                Id = 1,
                Name = "F. Scott Fitzgerald"
            };

            var author2 = new DbModels.Author
            {
                Id = 2,
                Name = "Ray Bradbury"
            };

            var author3 = new DbModels.Author
            {
                Id = 3,
                Name = "Nikos Kazantzakis"
            };

            context.Authors.Add(author1);
            context.Authors.Add(author2);
            context.Authors.Add(author3);

            var testBook1 = new DbModels.Book
            {
                Id = 1,
                Name = "The Great Gatsby",
                BookCategory = bookCategory1,
                Author = author1
            };

            var testBook2 = new DbModels.Book
            {
                Id = 2,
                Name = "Fahrenheit 451",
                BookCategory = bookCategory1,
                Author = author2
            };

            var testBook3 = new DbModels.Book
            {
                Id = 3,
                Name = "Zorba the Greek",
                BookCategory = bookCategory1,
                Author = author3
            };

            context.Books.Add(testBook1);
            context.Books.Add(testBook2);
            context.Books.Add(testBook3);

            context.SaveChanges();
        }    
    }
}