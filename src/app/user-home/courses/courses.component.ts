import { Component, OnInit } from '@angular/core';

import { CourseServiceService } from '../course-service.service';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // save the courses
  courses!: Course[];
  constructor( private courseService: CourseServiceService) {}
  ngOnInit(): void {
    this.courseService.getCourses(0).subscribe((data: Course[] | any) => {
      console.log(data);
      this.courses = data;
    })
  }
}
