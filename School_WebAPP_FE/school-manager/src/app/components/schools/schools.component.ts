import { Component, OnInit } from '@angular/core';
import School from 'src/app/models/school.model';
import { SchoolsService } from 'src/app/services/schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  public schools : School[] = [];

  constructor(private _schoolsService : SchoolsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() : void {
    this._schoolsService.getAll().subscribe((schools) => {
      this.schools = schools;
    });
  }
}
