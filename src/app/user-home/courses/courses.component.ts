import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor( private courseService: CourseServiceService) {}
  ngOnInit(): void {
    this.courseService.getCourses(0).subscribe(data => {
      console.log(data);
    })
  }
}
