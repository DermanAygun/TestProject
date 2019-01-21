import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logoImg = "https://www.iconsdb.com/icons/preview/white/stumbleupon-xxl.png";
  loginImg = "https://www.iconsdb.com/icons/preview/white/user-4-xxl.png";
  loginNotificationsImg = "https://www.iconsdb.com/icons/preview/white/message-xxl.png";

  register: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.register = false;
  }

  close() {
    this.register = true;
  }

}
