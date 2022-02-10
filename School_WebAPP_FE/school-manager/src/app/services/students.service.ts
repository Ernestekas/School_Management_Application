import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url : string = "https://localhost:44319/api/Students/"

  constructor(private http : HttpClient) { }

  public getAll() : Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  public create(student : Student) : Observable<any> {
    return this.http.post(this.url, student);
  } 

  public remove(id : number) : Observable<any> {
    return this.http.delete(this.url + id)
  }
}
