import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MainService } from 'src/app/main.service';
import { CartResponse } from '../../shared/models/cart-response';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartDataSubscription!: Subscription;
  cartData!: CartResponse;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.cartDataSubscription = this.mainService.getCart()
      .subscribe({
        next: (data: CartResponse) => {
          this.cartData = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  ngOnDestroy(): void {
    this.cartDataSubscription.unsubscribe();
  }
}
