import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { course } from '../Models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseUrl = 'https://localhost:8080/api/Courses/';

  constructor(private http: HttpClient) { }


  getAllCourses() : Observable<course[]>{
    return this.http.get<course[]>(this.baseUrl+'getAllCourses').pipe();
  }


}
