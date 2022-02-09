using Microsoft.EntityFrameworkCore;
using School_WebAPI_BE.Data;
using School_WebAPI_BE.Models;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Repositories
{
    public class StudentRepository : RepositoryBase<Student>
    {
        public StudentRepository(DataContext context) : base(context) { }

        public async Task<Student> GetByIdIncludedAsync(int id)
        {
            return await _context.Students.Include(s => s.School).FirstOrDefaultAsync(s => s.Id == id);
        }
    }
}
