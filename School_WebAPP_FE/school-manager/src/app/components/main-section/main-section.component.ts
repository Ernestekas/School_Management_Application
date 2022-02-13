import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { DataContainerService } from 'src/app/services/data-container.service';
import { SchoolsService } from 'src/app/services/schools.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
