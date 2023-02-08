import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

import { userData } from '../../shared/models/user-data';
import { userProfileUpdateResponse } from '../../shared/models/link-update-response';
import { ImageUploadResponse } from '../../shared/models/upload-profile-img'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userDataFetchSeubscription!: Subscription;
  userLinkSaveSubscription = new Subscription();
  profileImageUploadSubscription = new Subscription();
  userData!: userData;
  linkForm = new FormControl;
  image!: File;
  imgPath = ''

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    // fetch user data
    this.userDataFetchSeubscription = this.mainService.getProdileData()
      .subscribe((data: userData) => {
        console.log(data);
        this.userData = data;
        this.imgPath = `${environment.fileGettUrl}${this.userData.userDetails.profile_img}`
        this.linkForm.value.instagram = data.userDetails.links.gitHub;
      })
  }

  // function to save links
  saveLinks(linkForm: NgForm) {
    // this.linkForm = linkForm;
    // rejecx pattern to check the link validity
    const instagramRegex = new RegExp('^(https?://)?(www\.)?instagram\.com/');
    const twitterRegex = new RegExp('^(https?://)?(www\.)?twitter\.com/');
    const linkedinRegex = new RegExp('^(https?://)?(www\.)?linkedin\.com/');
    const githubRegex = new RegExp('^(https?://)?(www\.)?github\.com/');
    
    // set previous data to form
    linkForm.value.instagram = linkForm.value.instagram ? linkForm.value.instagram : this.userData.userDetails.links.instagram;
    linkForm.value.twitter = linkForm.value.twitter ? linkForm.value.twitter : this.userData.userDetails.links.twitter;
    linkForm.value.linkdIn = linkForm.value.linkdIn ? linkForm.value.linkdIn : this.userData.userDetails.links.linkdIn;
    linkForm.value.gitHub = linkForm.value.gitHub ? linkForm.value.gitHub : this.userData.userDetails.links.gitHub;

    if (instagramRegex.test(linkForm.value.instagram) &&
        twitterRegex.test(linkForm.value.twitter) &&
        linkedinRegex.test(linkForm.value.linkdIn) &&
        githubRegex.test(linkForm.value.gitHub)) {
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
      this.mainService.errorMessageEmitter.emit('make sure you filled all the fields and the links are valid')
    }
  }

  // function to update profile pic
  uploadProfilePick(event: any) {
    this.image = event.target.files[0];
    const uploadProfileFormData = new FormData();

    // uppend the file and user id to form data
    uploadProfileFormData.append('profilePic', this.image);
    uploadProfileFormData.append('userId', this.userData.userDetails._id);

    this.profileImageUploadSubscription = this.mainService.uploadImage(uploadProfileFormData)
      .subscribe((data: ImageUploadResponse) => {
        // change the image pathe
        this.imgPath = `${environment.fileGettUrl}${data.newPath}`
      })
  }

  ngOnDestroy(): void {
    // unsubscribe every subscriptions
    this.userDataFetchSeubscription.unsubscribe();
    this.userLinkSaveSubscription.unsubscribe()
    this.profileImageUploadSubscription.unsubscribe();
  }
}
