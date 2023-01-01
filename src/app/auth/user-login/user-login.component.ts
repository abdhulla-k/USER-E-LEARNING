import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  errorMessage = false;

  constructor(private authService: AuthService) { }

  login(formData: NgForm) {
    if (formData.valid && formData.value.email && formData.value.password) {
      this.errorMessage = false;
      this.authService.login(formData.value);
    } else {
      this.errorMessage = true;
    }
  }
}
