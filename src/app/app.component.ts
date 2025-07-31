import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-v19';
  Name = " Yash Katara";

  count = 0;

  increment() {
    this.count++;
    console.log("Incremented count: ", this.count);
  }
  decrement() {
    this.count--;
    console.log("Decremented count: ", this.count);
  }
  reset() {
    this.count = 0;
    console.log("Count reset to: ", this.count);
  }
}
