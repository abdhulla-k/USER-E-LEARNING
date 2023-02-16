import { Component, Input } from '@angular/core';
import { CourseServiceService } from 'src/app/user-home/course-service.service';

@Component({
  selector: 'app-course-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  @Input() module: any;

  constructor(private couseService: CourseServiceService) { }

  passPath() {
    this.couseService.selectedVideoPathEmitter.emit(this.module.videoPath);
  }
}
