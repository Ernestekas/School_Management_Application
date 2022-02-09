using FluentValidation;
using School_WebAPI_BE.Models;

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
