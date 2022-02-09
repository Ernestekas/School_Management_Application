using Microsoft.EntityFrameworkCore;
using School_WebAPI_BE.Models;

namespace School_WebAPI_BE.Data
{
    public class DataContext : DbContext
    {
        public DbSet<School> Schools { get; set; }
        public DbSet<Student> Students { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}
