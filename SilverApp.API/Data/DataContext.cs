using Microsoft.EntityFrameworkCore;
using SilverApp.API.Models;

namespace SilverApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base (options){}
        public DbSet<User> Users{get; set;}
        public DbSet<Product> Products{get; set;}

         protected override void OnModelCreating(ModelBuilder modelBuilder)
            {


                base.OnModelCreating(modelBuilder);

                modelBuilder.Entity<Product>()
                    .Property(sample => sample.price)
                    .HasColumnType("decimal(13, 4)");
            }

    }
}