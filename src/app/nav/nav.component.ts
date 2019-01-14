import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logoImg = "https://cdn2.iconfinder.com/data/icons/badminton/256/Badminton_Icon_set-03-128.png";
  loginImg = "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/user-account-profile-human-avatar-face-head--128.png";
  loginNotificationsImg = "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/about-info-information-128.png";

  test: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.test = !this.test;
  }

}
