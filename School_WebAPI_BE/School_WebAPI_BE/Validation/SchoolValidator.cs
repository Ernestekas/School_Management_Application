using FluentValidation;
using School_WebAPI_BE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Validation
{
    public class SchoolValidator : ValidatorBase<School>
    {
        public SchoolValidator()
        {
            RuleFor(s => s.Name).NotEmpty();
        }
    }
}
