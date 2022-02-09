using AutoMapper;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Models;
using School_WebAPI_BE.Repositories;
using School_WebAPI_BE.Validation;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Services
{
    public class SchoolService
    {
        private readonly SchoolRepository _schoolRepository;
        private readonly IMapper _mapper;
        private readonly SchoolValidator _schoolValidator;

        public SchoolService(SchoolRepository schoolRepository, IMapper mapper, SchoolValidator schoolValidator)
        {
            _schoolRepository = schoolRepository;
            _mapper = mapper;
            _schoolValidator = schoolValidator;
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

            _schoolValidator.ValidateModel(school);

            _mapper.Map(school, result);

            return result;
        }

        public async Task<int> CreateAsync(SchoolDto school)
        {
            School newSchool = new School()
            {
                Name = school.Name
            };

            _schoolValidator.ValidateModel(newSchool);
            _schoolValidator.CheckIdIsZero(newSchool);

            return await _schoolRepository.CreateAsync(newSchool);
        }

        public async Task DeleteAsync(int id)
        {
            School school = await _schoolRepository.GetByIdAsync(id);

            _schoolValidator.TryValidateGet(school);

            await _schoolRepository.RemoveAsync(school);
        }
    }
}
