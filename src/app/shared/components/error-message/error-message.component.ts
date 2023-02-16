import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  errorMessage = '';
  errorSubscription!: Subscription
  constructor( private mainService: MainService) { }

  ngOnInit(): void {
    this.errorSubscription = this.mainService.errorMessageEmitter.subscribe(data => {
      this.errorMessage = data;
      console.log(this.errorMessage, 'from error component')
    })
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
