import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { DataContainerService } from 'src/app/services/data-container.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  public schools: School[] = [];
  public subscription: Subscription;

  public selectedSchool: School = { studentsCount: 0 };

  public displayStyle = "none";

  public newStudent: Student = {};

  constructor(
    private _studentsService: StudentsService,
    private _dataContainerService: DataContainerService
  ) {
    this.subscription = this._dataContainerService.getSchools().subscribe((schools) => {
      this.schools = schools;
    });
  }

  ngOnInit(): void {
  }

  public submitCreate(newStudent: Student) {
    newStudent.schoolId = this.selectedSchool.id;
    newStudent.schoolName = this.selectedSchool.name;

    this._studentsService.create(newStudent).subscribe({
      next: () => {
        this._studentsService.getAll().subscribe({
          next: (students) => {
            this._dataContainerService.clearStudents();
            this._dataContainerService.sendStudents(students);
          },
          error: (response) => this.setError(response.error),
          complete: () => this.hideError()
        });
      },
      error: (response) => {
        this.setError(response.error)
      },
      complete: () => {
        this.hideError();
        this.selectedSchool = { studentsCount: 0 }
        this.newStudent = {}

        this.closePopup();
      }
    });
  }

  public cancelCreate() {
    this.hideError();
    this.newStudent = {};
    this.selectedSchool = { studentsCount: 0 };

    this.closePopup();
  }

  public openPopup() {
    this.displayStyle = "block";
  }

  private closePopup() {
    this.displayStyle = "none";
  }

  private setError(message: any) {
    let errorElement = document.getElementById("studentErrorMessage");
    errorElement!.innerHTML = '* ' + message;
    console.log(errorElement?.innerHTML)
    errorElement!.removeAttribute("hidden");
  }

  private hideError() {
    let errorElement = document.getElementById("studentErrorMessage");
    errorElement!.innerHTML = '';
    errorElement!.setAttribute("hidden", "hidden");
  }
}
