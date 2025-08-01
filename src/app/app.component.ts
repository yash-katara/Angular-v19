import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-v19';
  Name = ' ';
  displayName = '';
  display = true; // For if/else example
  color = 'yello';

  count = 0;

  increment() {
    this.count++;
    console.log('Incremented count: ', this.count);
  }
  decrement() {
    this.count--;
    console.log('Decremented count: ', this.count);
  }
  reset() {
    this.count = 0;
    console.log('Count reset to: ', this.count);
  }

  handlecounter(val: string) {
    if (val === 'increment') {
      this.increment();
    } else if (val === 'decrement') {
      this.decrement();
    } else if (val === 'reset') {
      this.reset();
    }
  }

  getname(event: any) {
    const inputValue = event.target.value;
    console.log('Input value: ', inputValue);
    this.Name = inputValue;
    console.log('Updated Name: ', this.Name);
  }
  showname() {
    this.displayName = this.Name;
    console.log('Current Name: ', this.Name);
  }
  setName() {
    this.Name = 'Anup';
    console.log('Name set to: ', this.Name);
  }
  // hide(){
  //   this.display = false;
  //   console.log("Div hidden");
  // }
  // show(){
  //   this.display = true;
  //   console.log("Div shown");
  // }
  toggle() {
    this.display = !this.display;
    console.log(
      'Div toggled, current state: ',
      this.display ? 'shown' : 'hidden'
    );
  }
  handlecolor(val: any) {
    //this.color = this.color === 'green' ? 'blue' : 'red';
    this.color = val;
    console.log('Color changed to: ', this.color);
  }

  users = ['Anil', 'Anup', 'Ankush', 'Anjali', 'Anita'];
  Students = [
    { name: 'Anil', age: 20, city: 'Delhi', email: 'abc@gmil.com' },
    { name: 'Anup', age: 22, city: 'Mumbai', email: 'bca@gmail.com' },
    { name: 'Ankush', age: 21, city: 'Bangalore', email: 'qwe@gmail.com' },
    { name: 'Anjali', age: 23, city: 'Chennai', email: 'wqa@gmail.com' },
    { name: 'Anita', age: 24, city: 'Kolkata', email: 'oiy@gmail.com' },
  ];

  showData = false;
  displayedUsers: string[] = [];
  displayedStudents: any[] = [];

  getdata() {
    this.displayedUsers = this.users;
    this.displayedStudents = this.Students;
    this.showData = !this.showData; // Toggle showData
    console.log('Data displayed:', this.showData ?"showing" : "not showing");
    console.log('Users: ', this.users);
    console.log('Students: ', this.Students);
  }
}
