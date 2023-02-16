import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-success-messages',
  templateUrl: './success-messages.component.html',
  styleUrls: ['./success-messages.component.css']
})
export class SuccessMessagesComponent implements OnInit {
  successMessage = '';
  successMessageSubscription!: Subscription;

  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.successMessageSubscription = this.mainService.successMessageEmitter.subscribe(data => {
      this.successMessage = data;
    })
  }
}
