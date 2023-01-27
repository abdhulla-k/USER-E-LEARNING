import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseServiceService } from 'src/app/user-home/course-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  courseIdSubscription!: Subscription;
  courseDetailsFetchSubscription!: Subscription;
  courseId = '';
  course!: any;

  constructor(private courseService: CourseServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.course);
    // subscribe to params
    this.courseIdSubscription = this.activatedRoute.params.subscribe(params => {
      this.courseId = params['courseId'];
    })

    this.courseDetailsFetchSubscription = this.courseService.fetchCourseDetails(this.courseId).subscribe(data => {
      this.course = data;
    })
  }

  ngOnDestroy(): void {
    this.courseIdSubscription.unsubscribe();
    this.courseDetailsFetchSubscription.unsubscribe();
  }
  
}
