import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getCourses(index: number) {
    return this.http.get<Observable<Course[]>>(`${this.baseUrl}/getCourses/${index}`)
  }

  fetchCourseDetails(courseId: string) {
    return this.http.get<Observable<Course>>(`${this.baseUrl}/courses/details/${courseId}`)
  }

  addToCart(courseId: string) {
    console.log(courseId);
    this.http.post(`${this.baseUrl}/addToCart`, { courseId: courseId }).subscribe(data => {
      console.log(data);
    })
  }
}
