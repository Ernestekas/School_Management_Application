using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace School_WebAPI_BE.Models
{
    public class School : Entity
    {
        [Required(ErrorMessage = "School must have a name.")]
        public string Name { get; set; }
        public List<Student> Students { get; set; } = new List<Student>();
    }
}
