import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  task="";
  taskList:{id:number, task:string} []= [];
// showname() {
//   alert("Hello, Yash Katara this side");
//   this.showname1();
//   console.log("Button clicked!");
// }
// showname1() {
//   alert("Hello, Yash Katara this side");
//   console.log("Button clicked!");
// }

  Addtask() {
    this.taskList.push({id: this.taskList.length + 1, task: this.task});
    this.task = "";
    console.log(this.taskList);
    alert("Task added successfully!");

  }
  DeleteTask() {
    this.taskList.pop();
    alert("Task deleted successfully!");
    console.log(this.taskList);
  }
}
