using Microsoft.EntityFrameworkCore;
using SilverApp.API.Models;

namespace SilverApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base (options){}
        public DbSet<User> Users{get; set;}

    }
}