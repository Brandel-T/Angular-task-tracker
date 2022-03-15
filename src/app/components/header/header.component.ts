import { Component, OnInit } from '@angular/core';

import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddtask: boolean = false; 
  subscription!: Subscription;
  // btnColor: string = 'green';
  // btnValue: string = 'Add';

  constructor(
    private uiService: UiService,
    private router: Router) 
  { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe( value => this.showAddtask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();    
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  } 

}
