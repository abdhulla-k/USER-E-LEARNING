import { Component, Input } from '@angular/core';
import { faEye, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CourseServiceService } from '../../course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: any;
  eye = faEye;
  like = faHeart;
  addToCart = faShoppingCart

  constructor(private coursService: CourseServiceService) { }

  addToUserCart() {
    this.coursService.addToCart(this.course._id)
  }
}
