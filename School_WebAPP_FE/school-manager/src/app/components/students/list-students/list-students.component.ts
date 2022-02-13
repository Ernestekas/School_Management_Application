import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { DataContainerService } from 'src/app/services/data-container.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  public students : Student[] = [];
  public studentsSubscription : Subscription;
  
  public schools : School[] = []
  public schoolsSubscription : Subscription;

  public selectedSchool : School = {studentsCount: 0};

  constructor(private _dataContainerService : DataContainerService, private _studentsService : StudentsService) { 
    this.schoolsSubscription = this._dataContainerService.getSchools().subscribe({
      next: (schools) => {
        this.schools = schools;
      },
      error: (error: Error) => console.log(error.name, error.message),
      complete: () => console.log("Get data from shared service: OK")
    });

    this.studentsSubscription = this._dataContainerService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
        this.students.map((student) => {
          student.schoolName = this.schools.filter(s => s.id === student.schoolId)[0].name;
        })
      },
      error: (error : Error) => console.log(error.name, error.message),
      complete: () => console.log("Get data from shared service: OK")
    });
  };

  ngOnInit(): void {
    this._studentsService.getAll().subscribe({
      next: (students) => {
        this._dataContainerService.sendStudents(students);
      },
      error: (error: Error) => console.log(error.name, error.message),
      complete: () => console.log("Get data from API: OK")
    });
  }

  public delete(id : number) : void {
    this._studentsService.remove(id).subscribe({
      next: () => {
        this._dataContainerService.clearStudents();
        this._studentsService.getAll().subscribe({
          next: (students) => {
            this._dataContainerService.sendStudents(students);
          },
          error: (error: Error) => console.log(error.name, error.message),
          complete: () => console.log("Get from API: OK")
        });
      },
      error: (error: Error) => console.log(error.name, error.message),
      complete: () => console.log("Remove from API: OK")
    });
  }
}
