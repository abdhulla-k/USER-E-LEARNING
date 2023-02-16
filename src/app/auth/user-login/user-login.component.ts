import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  errorMessage = false;

  constructor(private authService: AuthService, private store: Store) { }

  // function to user login
  login(formData: NgForm) {
    if (formData.valid && formData.value.email && formData.value.password) {
      this.errorMessage = false;
      // this.authService.login(formData.value);
      this.store.dispatch(new AuthActions.Login(formData.value));
    } else {
      this.errorMessage = true;
    }
  }
}
