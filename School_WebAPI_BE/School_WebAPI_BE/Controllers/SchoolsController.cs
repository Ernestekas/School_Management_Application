using Microsoft.AspNetCore.Mvc;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchoolsController : ControllerBase
    {
        private readonly SchoolService _schoolService;

        public SchoolsController(SchoolService schoolService)
        {
            _schoolService = schoolService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<SchoolDto> result = await _schoolService.GetAllAsync();
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
                SchoolDto result = await _schoolService.GetByIdAsync(id);
                return Ok(result);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(406, ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add(SchoolDto school)
        {
            try
            {
                int id = await _schoolService.CreateAsync(school);
                SchoolDto schoolDto = await _schoolService.GetByIdAsync(id);

                return Created($"~/Api/Schools/{id}", schoolDto);
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
                await _schoolService.DeleteAsync(id);
                return NoContent();
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
