import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Home";
  invis: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.invis = !this.invis;
  }

}
