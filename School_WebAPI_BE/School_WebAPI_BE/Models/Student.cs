﻿using System.ComponentModel.DataAnnotations;

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
