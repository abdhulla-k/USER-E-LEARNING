import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { IndividualCourse } from '../../../shared/models/cart-response';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() course!: IndividualCourse;
  imgBasePath = environment.fileGettUrl;
  removeIcon = faRemove;

  removeFromCart() {
    console.log(this.course.course_details[0]._id)
  }
}
