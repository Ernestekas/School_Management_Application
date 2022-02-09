using AutoMapper;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Dtos.Student;
using School_WebAPI_BE.Models;

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
