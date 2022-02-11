import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  @Output() createStudentEvent = new EventEmitter<Student>();
  @Input() schoolsInput : School[] = [];

  public selectedSchool : School = {studentsCount: 0};
  public displayStyle = "none";
  public newStudent : Student = {};

  constructor() { }

  ngOnInit(): void {
  }

  public submitCreate(student : Student) {
    student.schoolId = this.selectedSchool.id;
    console.log(this.selectedSchool);
    this.createStudentEvent.emit(student);
    this.newStudent = {};
    this.closePopup();
  }

  public cancelCreate() {
    this.closePopup();
  }

  public openPopup() {
    this.displayStyle = "block";
  }

  private closePopup() {
    this.displayStyle = "none";
  }
}
