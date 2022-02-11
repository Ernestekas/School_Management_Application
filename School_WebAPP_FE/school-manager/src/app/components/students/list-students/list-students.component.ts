import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  @Input() studentsInput : Student[] = [];
  @Input() schoolsInput : School[] = [];
  @Output() removeStudentEvent = new EventEmitter<number>();

  public selectedSchool : School = {studentsCount: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public delete(id : number) : void {
    this.removeStudentEvent.emit(id);
  }

  public assignSchoolNames() {
    for(let i = 0; i < this.studentsInput.length; i++){
      let schoolName = this.schoolsInput.filter(s => s.id === this.studentsInput[i])[0].name;
      this.studentsInput[0].schoolName = schoolName;
    }
  }
}
