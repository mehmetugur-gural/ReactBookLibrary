using Microsoft.EntityFrameworkCore;
using ReactBookLibrary.DbModels;
 
namespace ReactBookLibrary.DbModels
{
    public class EfContext : DbContext
    {
        public EfContext(DbContextOptions<EfContext> options)
            : base(options)
        {
        }
 
        public DbSet<Book> Books { get; set; }
        public DbSet<BookCategory> BookCategories { get; set; }
        public DbSet<Author> Authors { get; set; }
    }
}