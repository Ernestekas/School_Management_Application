using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Models
{
    public class School : Entity
    {
        [Required(ErrorMessage = "School must have a name.")]
        public string Name { get; set; }
        public List<Student> Students { get; set; } = new List<Student>();
    }
}
