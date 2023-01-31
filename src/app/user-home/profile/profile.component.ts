import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

import { userData } from '../../shared/models/user-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userDataFetchSeubscription!: Subscription;
  userData!: userData;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    // fetch user data
    this.userDataFetchSeubscription = this.mainService.getProdileData()
      .subscribe((data: userData) => {
        this.userData = data;
      })
  }

  ngOnDestroy(): void {
    this.userDataFetchSeubscription.unsubscribe();
  }
}
