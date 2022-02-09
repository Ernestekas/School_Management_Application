using FluentValidation;
using School_WebAPI_BE.Models;

namespace School_WebAPI_BE.Validation
{
    public class StudentValidator : ValidatorBase<Student>
    {
        public StudentValidator()
        {
            RuleFor(s => s.FirstName).NotEmpty();
            RuleFor(s => s.LastName).NotEmpty();
            RuleFor(s => s.SchoolId).NotNull();
        }
    }
}
