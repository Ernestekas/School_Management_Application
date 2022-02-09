using School_WebAPI_BE.Data;
using School_WebAPI_BE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Repositories
{
    public class SchoolRepository : RepositoryBase<School>
    {
        public SchoolRepository(DataContext context) : base(context) { }
    }
}
