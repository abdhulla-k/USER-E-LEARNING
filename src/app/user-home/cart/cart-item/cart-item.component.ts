import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { IndividualCourse } from '../../../shared/models/cart-response';
import { MainService } from 'src/app/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnDestroy {
  @Input() course!: IndividualCourse;
  @Input() index!: number;
  $removeCartSubscription = new Subscription()
  imgBasePath = environment.fileGettUrl;
  removeIcon = faRemove;

  constructor(private mainService: MainService) { }

  removeFromCart() {
    console.log(this.course.course_details[0]._id)
    this.$removeCartSubscription = this.mainService.removeFromCart(this.course.course_details[0]._id)
      .subscribe({
        next: (data) => {
          this.mainService.successMessageEmitter.emit('successfully removed');
          this.mainService.deletedFromCart.emit(this.index)
        },
        error: (err) => {
          this.mainService.errorMessageEmitter.emit(err.message);
        }
      })
  }

  ngOnDestroy(): void {
    this.$removeCartSubscription.unsubscribe();
  }
}
