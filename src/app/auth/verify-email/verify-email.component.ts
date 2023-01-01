import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  routeData = { id: '', token: '' }

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = {
      id: this.activatedRoute.snapshot.params['id'],
      token: this.activatedRoute.snapshot.params['token']
    }

    this.activatedRoute.params.subscribe(data => {
      this.routeData.id = data['id'],
      this.routeData.token = data['token']
    })

    this.authService.verifyUser(this.routeData);
  }
}
