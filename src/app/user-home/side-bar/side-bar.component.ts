import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ControllerService } from '../../controller.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  toggle = false; // to controll the side bar
  loggedIn = false;

  constructor( private controllService: ControllerService, private authService: AuthService) {}

  ngOnInit(): void {
    this.controllService.sideNavToggler.subscribe(() => {
      // change the value of toggle varible
      this.toggle = !this.toggle;
    })

    this.loggedIn = this.authService.loggedInStatus;
    
    this.authService.loggedIn.subscribe(data => {
      this.loggedIn = true;
      console.log(this.loggedIn);
    })
  }

  // to closs the side bar
  closeNav() {
    this.toggle = false;
  }
}
