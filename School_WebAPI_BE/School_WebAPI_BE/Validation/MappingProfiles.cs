using AutoMapper;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Dtos.Student;
using School_WebAPI_BE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Validation
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<School, SchoolDto>().ReverseMap();
            CreateMap<Student, StudentDto>().ReverseMap();
        }
    }
}
