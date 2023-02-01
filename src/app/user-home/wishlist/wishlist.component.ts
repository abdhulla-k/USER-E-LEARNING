import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { WishlistResponse } from  '../../shared/models/wishlit-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  imgBasePah = environment.fileGettUrl;
  removeIcon = faRemove;
  wishlist!: WishlistResponse;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getWishlistData().subscribe((data: WishlistResponse) => {
      console.log(data)
      this.wishlist = data;
    })
  }
}
