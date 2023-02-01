import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { WishlistResponse } from '../../shared/models/wishlit-response';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {
  $wishlistDataSubscription!: Subscription;
  $removeFromWishlistSubscription = new Subscription();
  imgBasePah = environment.fileGettUrl;
  removeIcon = faRemove;
  wishlist!: WishlistResponse;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    // get wishlist data
    this.$wishlistDataSubscription = this.mainService.getWishlistData()
      .subscribe((data: WishlistResponse) => {
        this.wishlist = data;
      })
  }

  deleteWishlist(id: string, index: number) {
    console.log(index)
    this.$removeFromWishlistSubscription = this.mainService.removeFromWishlist(id)
      .subscribe({
        next: (data) => {
          this.wishlist.data.splice(index, 1);
          this.mainService.successMessageEmitter.emit('successfully removed!');
        },
        error: (err) => {
          this.mainService.errorMessageEmitter.emit(err.message)
        }
      })
  }

  ngOnDestroy(): void {
    this.$wishlistDataSubscription.unsubscribe();
    this.$removeFromWishlistSubscription.unsubscribe();
  }
}
