using CodePulseAPI.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CodePulseAPI.Model.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        // here "public" is not necessary if we have the DbContext in the same project which is [CodePulse]
        // now we have our DbContext in different project which is [CodePulse.Model]
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
