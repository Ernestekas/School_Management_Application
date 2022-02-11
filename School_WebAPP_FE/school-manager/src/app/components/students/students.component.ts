import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @Input() schoolsInput : School[] = [];

  public students : Student[] = [];

  constructor(
    private _studentsService : StudentsService
  ) { }

  ngOnInit(): void {
    this._studentsService.getAll().subscribe((students) => {
      this.students = students;
      this.assignSchools(this.students, this.schoolsInput);
    });
  }

  public create(student : Student) : void {
    this._studentsService.create(student).subscribe((student) => {
      this.students.push(student);
    });
  }

  public remove(id : number) : void {
    this._studentsService.remove(id).subscribe(() => {
      this.students = this.students.filter(s => s.id != id);
    });
  }

  private assignSchools(students : Student[], schools : School[]) : void {
    for(let i = 0; i < students.length; i++){
      students[i].schoolName = schools.filter(s => s.id === students[i].schoolId)[0].name;
    }
  }
}
