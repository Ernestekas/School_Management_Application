# School Management Application

Work in progress.

1. BACK-END. WEB API (.NET Core)
    - Functionality
        - Schools
            - Create. Create school. Data input:
                - Object with property 'name'
                - RETURNS: created school.

            - Remove. Delete school from database. Data input:
                - id from url. Firstly removes students from this school, then removes school.
                - RETURNS: nothing.

            - Display. Display all or single school. Data input:
                - None if return all.
                - id from url for single school.
                - RETURNS: List of schools (students not included) or one school with list of students.

        - Students
            - Create. Create student. Data input:
                - Object with properties 'firstName', 'lastName', 'schoolId'.
                - RETURNS: created studen.
            
            - Remove. Delete student. Data input:
                - id from url.
                - RETURNS: nothing.

            - Display. Display all or single student. Data input:
                - None if return all.
                - id from url for single student.
                - RETURNS: List of students (schools names not included) or one student with school name.

    - Models validation implemented. If rules are not met then API returns status code with error messages.

    - Database migration. Migration file to create database and tables.
        - To run: open package manager console. Type: update-database.

2. FRONT-END. ANGULAR.
    - Single page application where user can can view all existing schools, delete or create new schools and students using observables subjects. Validation made by checking messages received from server.
    - Students and schools create forms are made by using bootstrap modal classes.
    - Schools.
        - Add new school.
            - User inputs:
                - Name.
        - Delete school.
        - Display all schools.
     - Students.
        - Create new.
            - User inputs:
                - First name
                - Second name
                - Dropdown: list of existing schools
        - Remove.
        - Display all.
            - Show all students, with their names and schools they are signed in.
