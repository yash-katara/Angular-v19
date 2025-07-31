import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
showname() {
  alert("Hello, Yash Katara this side");
  this.showname1();
  console.log("Button clicked!");
}
showname1() {
  alert("Hello, Yash Katara this side");
  console.log("Button clicked!");
}
}
