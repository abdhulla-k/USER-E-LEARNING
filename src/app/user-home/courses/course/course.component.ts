import { Component, Input } from '@angular/core';
import { faEye, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { environment } from 'src/environments/environment';
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
  addToCart = faShoppingCart;
  baseUrl = environment.baseUrl;
  fileGettUrl = environment.fileGettUrl;

  constructor(private coursService: CourseServiceService) { }

  // to add course to cart
  addToUserCart() {
    this.coursService.addToCart(this.course._id)
  }

  // to add a course to wishlist
  addToWishlist() {
    this.coursService.addToWishlist(this.course._id)
  }
}
