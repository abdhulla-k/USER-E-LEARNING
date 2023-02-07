import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.css']
})
export class VerifyPaymentComponent implements OnInit {
  verified = false;
  token!: string;

  constructor(
    private mainService: MainService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.token = data['token'];
      this.mainService.verifyPayment(this.token)
        .subscribe({
          next: (res) => {
              this.verified = true;
              this.mainService.successMessageEmitter.emit('successfully verifyed')
          },
          error: (err) => {
            this.mainService.errorMessageEmitter.emit(err.message)
          }
        })
    })
  }
}
