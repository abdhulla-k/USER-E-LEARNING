import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() title = '';

  constructor(private store: Store) { }

  logOut() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
