import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import School from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private url : string = "https://localhost:44319/api/Schools/"
  
  constructor(private http : HttpClient) { }

  public getAll() : Observable<School[]> {
    return this.http.get<School[]>(this.url);
  }

  public create(school : School) : Observable<any> {
    return this.http.post(this.url, school);
  } 

  public remove(id : number) : Observable<any> {
    return this.http.delete(this.url + id)
  }
}
