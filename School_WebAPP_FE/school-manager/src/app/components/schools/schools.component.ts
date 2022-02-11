import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { SchoolsService } from 'src/app/services/schools.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  @Output() sendSchoolsEvent = new EventEmitter<School[]>();
  
  public students : Student[] = [];
  public schools : School[] = [];
  
  constructor(
    private _schoolsService : SchoolsService,
    private _studentsService : StudentsService
    ) { }

  ngOnInit(): void {
    this.getAllSchools();
    this.getAllStudents();
  }

  private getAllSchools() : void {
    this._schoolsService.getAll().subscribe((schools) => {
      this.schools = schools;
      // this.calculateSchools(this.schools);
      this.sendSchoolsEvent.emit(schools);
    });
    
  }

  public create(school : School) : void {
    this._schoolsService.create(school).subscribe((school) => {
      this.schools.push(school);
      this.sendSchoolsEvent.emit(this.schools);
    })
  }

  public remove(id : number) : void {
    this._schoolsService.remove(id).subscribe(() => {
      this.schools = this.schools.filter(s => s.id != id);
    });
  }

  public getAllStudents() : void {
    this._studentsService.getAll().subscribe((students) => {
      this.students = students;
      this.calculateSchools(this.students);
    })
  }

  public calculateSchools(students : Student[]) {
    for(let i = 0; i < this.schools.length; i++){
      var schoolStudents = this.students.filter(s => s.schoolId === this.schools[i].id);
      this.schools[i].students = schoolStudents;
      this.schools[i].studentsCount = schoolStudents.length;
    }
  }
}
