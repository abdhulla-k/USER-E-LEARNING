import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { MainService } from 'src/app/main.service';
import { CartResponse } from '../../shared/models/cart-response';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  $cartDataSubscription!: Subscription;
  $deleteFromCartSubscription!: Subscription;
  $paymoneySubscription = new Subscription();
  cartData!: CartResponse;
  paymentLoading = false;
  cardDetailsError = false;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    // get cart details when loding this component
    this.$cartDataSubscription = this.mainService.getCart()
      .subscribe({
        // get data
        next: (data: CartResponse) => {
          this.cartData = data;
        },
        // to handle error
        error: (err) => {
          // show error message
          this.mainService.errorMessageEmitter.emit('failed to load cart data')
        }
      })

    // to delete course from cart data
    this.$deleteFromCartSubscription = this.mainService.deletedFromCart
      .subscribe((index: number) => {
        this.cartData.data.splice(index, 1);
      })
  }

  async pay() {
    this.cardDetailsError = false;
    this.paymentLoading = true;

    // request to pay
    this.mainService.payMoney()
      .subscribe({
        // success call
        next: (res: any) => {
          window.location.href = res.session.url;
          this.paymentLoading = false;
          // const stripe = await loadStripe(environment.stripePublicKey)
        },
        // error call
        error: (err) => {
          this.mainService.errorMessageEmitter.emit(err.message);
          this.paymentLoading = false;
        }
      })
  }

  ngOnDestroy(): void {
    // unsubscribe all subscriptions
    this.$cartDataSubscription.unsubscribe();
    this.$deleteFromCartSubscription.unsubscribe();
    this.$paymoneySubscription.unsubscribe();
  }
}
