using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using School_WebAPI_BE.Services;
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
            return Ok("Sveikas");
        }
    }
}
