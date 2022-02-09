using School_WebAPI_BE.Dtos.Student;
using System.Collections.Generic;

namespace School_WebAPI_BE.Dtos.School
{
    public class SchoolDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<StudentDto> Students { get; set; }
    }
}
