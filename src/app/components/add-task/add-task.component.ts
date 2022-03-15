import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // attributes for two-way-binding 
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddtask: boolean = false;
  subscription: Subscription;

  constructor( private uiService: UiService ) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe( value => this.showAddtask = value );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if ( ! this.text ) {
      alert('Please add a task');
      return;
    }
    
    const newtask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    // emit of inputs 
    this.onAddTask.emit(newtask);

    // after emit, clear the formular(form)
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
