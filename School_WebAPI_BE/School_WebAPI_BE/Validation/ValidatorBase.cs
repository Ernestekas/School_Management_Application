using FluentValidation;
using FluentValidation.Results;
using School_WebAPI_BE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School_WebAPI_BE.Validation
{
    public class ValidatorBase<T> : AbstractValidator<T> where T : Entity
    {
        public void TryValidateGet(T obj)
        {
            if(obj == null)
            {
                throw new ArgumentNullException(nameof(obj));
            }
        }

        public void CheckIdIsZero(T obj)
        {
            if (obj.Id > 0)
            {
                throw new ArgumentException("Property 'id' must be 0.");
            }
        }

        public void ValidateModel(T obj)
        {
            ValidationResult validation = Validate(obj);

            if (validation.Errors.Select(e => e.ErrorMessage).Any())
            {
                throw new ArgumentException(string.Join("; ", validation.Errors.Select(e => e.ErrorMessage)));
            }
        }
    }
}
