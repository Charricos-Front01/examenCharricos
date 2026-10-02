import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentLoginsObj: any =[
    {img: 'assets/images/womanC.png', name: 'Aliana Hepburn'},
    {img: 'assets/images/manC.png', name: 'Andrew Pochink'},
    {img: 'assets/images/plusC.png', name: 'Add Account'}
  ]

  socialObj: any = [
    { name: 'Facebook'},
    { name: 'Linked In'},
    { name: 'Google'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
