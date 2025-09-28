import { Component } from '@angular/core';
import { TaskProfileCard } from '../../component/task/task-profile-card/task-profile-card';
import { TaskProfile } from '../../model/task-profile';
import { CommonModule } from '@angular/common';
import { TaskProfileService } from '../../service/task-profile-service';

@Component({
  selector: 'app-task-profile-list-page',
  imports: [TaskProfileCard, CommonModule],
  templateUrl: './task-profile-list-page.html',
  styleUrl: './task-profile-list-page.scss'
})
export class TaskProfileListPage {

  taskProfiles: TaskProfile[] = [];

  constructor(private taskProfileService: TaskProfileService) {
  
  }

  ngOnInit(): void {
    this.taskProfileService.getTaskProfilesByUserId('9999').subscribe(profiles => {
      this.taskProfiles = profiles;
    })
  }

}
