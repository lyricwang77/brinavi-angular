import { Component, Input } from '@angular/core';
import { TaskProfile } from '../../../model/task-profile';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-profile-card',
  imports: [CardModule, TagModule, CommonModule],
  templateUrl: './task-profile-card.html',
  styleUrl: './task-profile-card.scss'
})
export class TaskProfileCard {
  @Input() taskProfile!: TaskProfile;


}
