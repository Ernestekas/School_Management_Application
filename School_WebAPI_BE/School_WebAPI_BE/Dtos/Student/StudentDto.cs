namespace School_WebAPI_BE.Dtos.Student
{
    public class StudentDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int SchoolId { get; set; }
        public string SchoolName { get; set; }
    }
}
