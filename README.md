# School Management Application

Work in progress.

1. BACK-END. WEB API (.NET Core)
    - Functionality
        - Schools
            - Create. Create school. Data input:
                - Object with property 'name'
                - RETURNS: created school.

            - Remove. Delete school from database. Data input:
                - id from url.
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
