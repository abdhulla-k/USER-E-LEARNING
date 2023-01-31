import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

import { userData } from '../../shared/models/user-data';
import { userProfileUpdateResponse } from '../../shared/models/link-update-response';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userDataFetchSeubscription!: Subscription;
  userLinkSaveSubscription!: Subscription;
  userData!: userData;
  linkForm = new FormControl

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    // fetch user data
    this.userDataFetchSeubscription = this.mainService.getProdileData()
      .subscribe((data: userData) => {
        console.log(data);
        this.userData = data;
      })
  }

  // function to save links
  saveLinks(linkForm: NgForm) {
    if (linkForm.value.twitter && linkForm.value.instagram && linkForm.value.linkdIn) {
      this.userLinkSaveSubscription = this.mainService.saveUserLinks(linkForm).subscribe({
        next: (data: userProfileUpdateResponse) => {
          this.userData.userDetails.links = data.userDetails;
          this.mainService.successMessageEmitter.emit('profile successfully updated')
        },
        error: (err: { status: boolean, message: string }) => {
          this.mainService.errorMessageEmitter.emit(err.message)
        }
      })
    } else {
      this.mainService.errorMessageEmitter.emit('make sure you filled all the fields')
    }
  }

  ngOnDestroy(): void {
    this.userDataFetchSeubscription.unsubscribe();
    this.userLinkSaveSubscription.unsubscribe();
  }
}
