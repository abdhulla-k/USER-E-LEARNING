import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseServiceService } from 'src/app/user-home/course-service.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, OnDestroy {
  name!: string;
  videoUrl = ``;
  videoPathSubscription!: Subscription;

  constructor(private courseService: CourseServiceService) { }

  ngOnInit() {

    this.videoPathSubscription = this.courseService.selectedVideoPathEmitter
      .subscribe((path: string) => {
        const splitted = path.split('/')
        this.name = splitted[splitted.length - 1]
        this.videoUrl = `http://localhost:3000/user/playVideo/${this.name}`;
      })
  }

  ngOnDestroy(): void {
    this.videoPathSubscription.unsubscribe();
  }
}
