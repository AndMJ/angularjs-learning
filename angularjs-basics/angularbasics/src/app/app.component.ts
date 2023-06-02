import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularJS';

  getEmit(task: any) {
    alert("title:" + task.title + " desc:" + task.description);
  }

  todo: Task[] = [
    {
      title: "Aprender AngularJS",
      description: "AngularJS+Firebase"
    },
    {
      title: "Aprender Firebase",
      description: "Firebase Auth + web hosting + database"
    }
  ]
}
