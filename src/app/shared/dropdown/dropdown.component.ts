import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() title = '';

  constructor(private authService: AuthService) { }

  logOut() {
    this.authService.logOut();
  }
}
