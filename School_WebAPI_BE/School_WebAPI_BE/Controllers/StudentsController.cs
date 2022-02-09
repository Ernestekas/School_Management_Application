using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using School_WebAPI_BE.Dtos.Student;
using School_WebAPI_BE.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentService _studentService;

        public StudentsController(StudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<StudentDto> result = await _studentService.GetAllAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Conflict(ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                StudentDto result = await _studentService.GetByIdAsync(id);
                return Ok(result);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add(StudentDto student)
        {
            try
            {
                int id = await _studentService.CreateAsync(student);
                StudentDto studentDto = await _studentService.GetByIdAsync(id);

                return Created($"~/Api/Schools/{id}", studentDto);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _studentService.DeleteAsync(id);
                return NoContent();
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
