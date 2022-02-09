using AutoMapper;
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

        public SchoolService(SchoolRepository schoolRepository)
        {
            _schoolRepository = schoolRepository;
        }


    }
}
