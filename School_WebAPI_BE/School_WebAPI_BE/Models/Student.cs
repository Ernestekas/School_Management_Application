using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Models
{
    public class Student : Entity
    {
        [Required(ErrorMessage ="Student must have a first name.")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Student must have a last name.")]
        public string LastName { get; set; }
        public int SchoolId { get; set; }
        public School School { get; set; }
    }
}
