using AutoMapper;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Dtos.Student;
using School_WebAPI_BE.Models;
using School_WebAPI_BE.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Services
{
    public class SchoolService
    {
        private readonly SchoolRepository _schoolRepository;
        private readonly IMapper _mapper;

        public SchoolService(SchoolRepository schoolRepository, IMapper mapper)
        {
            _schoolRepository = schoolRepository;
            _mapper = mapper;
        }

        public async Task<List<SchoolDto>> GetAllAsync()
        {
            List<SchoolDto> result = new List<SchoolDto>();
            List<School> schools = await _schoolRepository.GetAllAsync();

            _mapper.Map(schools, result);

            return result;
        }

        public async Task<SchoolDto> GetByIdAsync(int id)
        {
            SchoolDto result = new SchoolDto();
            School school = await _schoolRepository.GetByIdIncludedAsync(id);

            _mapper.Map(school, result);

            return result;
        }
    }
}
