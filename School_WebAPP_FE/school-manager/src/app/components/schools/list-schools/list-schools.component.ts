import { Component, Input, OnInit } from '@angular/core';
import School from 'src/app/models/school.model';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.scss']
})
export class ListSchoolsComponent implements OnInit {
  @Input() schoolsInput : School[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
