import { course } from './../../Models/course';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  courses : course[] = [];

  errorMessage : any;
  constructor(private coursesService : CoursesService) { }

  ngOnInit(): void {

    this.coursesService.getAllCourses().subscribe({
      next : data => this.courses = data,
      error : err => this.errorMessage = err
    });


  }

}
