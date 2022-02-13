import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import School from '../models/school.model';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class DataContainerService {
  private students = new Subject<Student[]>();

  private schools = new Subject<School[]>();

  getSchools() : Observable<any> {
    return this.schools.asObservable();
  }

  sendSchools(schools : School[]) {
    this.schools.next(schools);
  }

  clearSchools() {
    this.schools.next([]);
  }

  getStudents() : Observable<any> {
    return this.students.asObservable();
  }

  sendStudents(students : Student[]) {
    this.students.next(students);
  }

  clearStudents() {
    this.students.next([]);
  }
}
