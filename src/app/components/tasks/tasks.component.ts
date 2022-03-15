import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'; 
import { TASKS } from '../../mock-task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // tasks: Task[] = [];
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);

  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks.filter(t => t.id !== task.id)
      );
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskreminder(task)
      .subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task)
      .subscribe( 
        (task) => this.tasks.push(task)
    );    
  }

}
