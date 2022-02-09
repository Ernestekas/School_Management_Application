using AutoMapper;
using School_WebAPI_BE.Dtos.Student;
using School_WebAPI_BE.Models;
using School_WebAPI_BE.Repositories;
using School_WebAPI_BE.Validation;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Services
{
    public class StudentService
    {
        private readonly StudentRepository _studentRepository;
        private readonly StudentValidator _studentValidator;
        private readonly IMapper _mapper;

        public StudentService(StudentRepository studentRepository, StudentValidator studentValidator, IMapper mapper)
        {
            _studentRepository = studentRepository;
            _studentValidator = studentValidator;
            _mapper = mapper;
        }

        public async Task<List<StudentDto>> GetAllAsync()
        {
            List<StudentDto> result = new List<StudentDto>();
            List<Student> students = await _studentRepository.GetAllAsync();

            _mapper.Map(students, result);

            return result;
        }

        public async Task<StudentDto> GetByIdAsync(int id)
        {
            StudentDto result = new StudentDto();
            Student student = await _studentRepository.GetByIdIncludedAsync(id);

            _studentValidator.ValidateModel(student);

            _mapper.Map(student, result);

            return result;
        }

        public async Task<int> CreateAsync(StudentDto student)
        {
            Student newStudent= new Student()
            {
                FirstName = student.FirstName,
                LastName = student.LastName,
                SchoolId = student.SchoolId
            };

            _studentValidator.ValidateModel(newStudent);
            _studentValidator.CheckIdIsZero(newStudent);

            return await _studentRepository.CreateAsync(newStudent);
        }

        public async Task DeleteAsync(int id)
        {
            Student student = await _studentRepository.GetByIdAsync(id);

            _studentValidator.TryValidateGet(student);

            await _studentRepository.RemoveAsync(student);
        }
    }
}
