using Microsoft.EntityFrameworkCore;
using School_WebAPI_BE.Data;
using School_WebAPI_BE.Models;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Repositories
{
    public class SchoolRepository : RepositoryBase<School>
    {
        public SchoolRepository(DataContext context) : base(context) { }

        public async Task<School> GetByIdIncludedAsync(int id)
        {
            return await _context.Schools.Include(s => s.Students).FirstOrDefaultAsync(s => s.Id == id);
        }
    }    
}
