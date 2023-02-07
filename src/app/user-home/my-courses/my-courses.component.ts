import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { MainService } from 'src/app/main.service';
import { environment } from 'src/environments/environment';
import { GetMyCourseResponse } from '../../shared/models/get-my-courses';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  $myCoursesSubscription!: Subscription;
  mycourses!: GetMyCourseResponse;
  fileGettUrl = environment.fileGettUrl;
  eye = faEye;

  constructor(
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.$myCoursesSubscription = this.mainService.getMyCourses(0)
      .subscribe({
        next: (res: GetMyCourseResponse) => {
          this.mycourses = res;
          console.log(this.mycourses);
        },
        error: (err) => {
          this.mainService.errorMessageEmitter.emit(err.message);
          // redirect to home
          this.router.navigate(['/user']);
        }
      })
  }

  ngOnDestroy(): void {
    // unsubscribe every subscriptions
    this.$myCoursesSubscription.unsubscribe();
  }
}
