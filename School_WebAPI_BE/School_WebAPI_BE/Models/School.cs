using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Models
{
    public class School : Entity
    {
        public string Name { get; set; }
        public List<Student> Students { get; set; } = new List<Student>();
    }
}
