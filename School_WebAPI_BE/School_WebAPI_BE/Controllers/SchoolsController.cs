using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using School_WebAPI_BE.Dtos.School;
using School_WebAPI_BE.Services;
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
            List<SchoolDto> result = await _schoolService.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            SchoolDto result = await _schoolService.GetByIdAsync(id);
            return Ok(result);
        }
    }
}
