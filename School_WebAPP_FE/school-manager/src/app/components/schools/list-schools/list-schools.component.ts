import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { DataContainerService } from 'src/app/services/data-container.service';
import { SchoolsService } from 'src/app/services/schools.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-schools',
  templateUrl: './list-schools.component.html',
  styleUrls: ['./list-schools.component.scss']
})
export class ListSchoolsComponent implements OnInit {
  public schools : School[] = [];
  public subscription : Subscription;

  constructor(
    private _dataContainerService : DataContainerService, 
    private _schoolsService : SchoolsService, 
    private _studentsService : StudentsService ) {
    this.subscription = this._dataContainerService.getSchools().subscribe({
      next: (schools) => {
        this.schools = schools;
      },
      error: (error : Error) => console.log(error.message),
      complete: () => console.log("OK")
    });
  }

  ngOnInit(): void {
    this._schoolsService.getAll().subscribe({
      next: (schools) => {
        this._dataContainerService.sendSchools(schools);
      },
      error: (error : Error) => console.log(error.name, error.message),
      complete: () => console.log("OK")
    });
  }

  public delete(id : number) : void {
    this._schoolsService.remove(id).subscribe({
      next: () => {
        this._schoolsService.getAll().subscribe({
          next: (schools) => {
            this._dataContainerService.clearSchools();
            this._dataContainerService.sendSchools(schools);
            
            this._studentsService.getAll().subscribe({
              next: (students) => {
                this._dataContainerService.clearStudents();
                this._dataContainerService.sendStudents(students);
              }
            })
          },
          error: (error: Error) => console.log(error.name, error.message),
          complete: () => console.log("Get data from API: OK")
        });
      },
      error: (error: Error) => console.log(error.name, error.message),
      complete: () => console.log("Remove request API: OK")
    });
  }
}
