import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/auth/auth.service';
import { ControllerService } from '../../controller.service';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  constructor(
    private controllerService: ControllerService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  faHumbergerMenue = faBars; // humber ger or toggle menue icon
  loggedIn = false;

  ngOnInit(): void {
    // Check whether the user is authenticated or not
    this.store.select('authentication').subscribe(authData => {
      // change the loggedIn variables value
      this.loggedIn = authData.loggedInStatus ? true : false;
    })
  }

  // function to control side bar with humberger icon
  toggleSidebar() {
    this.controllerService.sideNavToggler.emit();
  }
}
