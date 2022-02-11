import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.scss']
})
export class ListSchoolsComponent implements OnInit {
  @Input() schoolsInput : School[] = [];
  @Input() studentsInput : Student[] = [];
  @Output() removeSchoolEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public delete(id : number) : void {
    this.removeSchoolEvent.emit(id);
  }
}
