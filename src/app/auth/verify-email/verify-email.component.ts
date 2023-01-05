import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';

import * as AuthActions from '../store/auth.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  routeData = { id: '', token: '' }
  verified = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.routeData = {
      id: this.activatedRoute.snapshot.params['id'],
      token: this.activatedRoute.snapshot.params['token']
    }

    this.activatedRoute.params.subscribe(data => {
      this.routeData.id = data['id'],
      this.routeData.token = data['token']
    })

    this.store.dispatch(new AuthActions.VerifyEmailStart(this.routeData));
    this.store.select('authentication').subscribe(authData => {
      if(authData.emailVerified) {
        this.verified = true;
      } else {
        this.verified = false;
      }
    })
  }
}
