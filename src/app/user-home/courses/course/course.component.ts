import { Component, Input } from '@angular/core';
import { faEye, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
}
