import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/auth/auth.service';
import { ControllerService } from '../../controller.service';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  toggle = false; // to controll the side bar
  loggedIn = false;
  profile = false;

  constructor(
    private controllService: ControllerService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.controllService.sideNavToggler.subscribe(() => {
      // change the value of toggle varible
      this.toggle = !this.toggle;
    })

    // check if there a user loged in or not
    this.store.select('authentication').subscribe(state => {
      this.loggedIn = state.loggedInStatus;
    })

  }

  // to closs the side bar
  closeNav() {
    this.toggle = false;
    this.profile = false;
  }

  openProfile() {
    this.profile = !this.profile;
    console.log(this.profile);
  }

  logOut() {
    this.store.dispatch(new AuthActions.Logout());
    this.closeNav();
    this.router.navigate(['/user/'])
  }
}
