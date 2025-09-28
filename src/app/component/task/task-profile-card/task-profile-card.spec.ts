import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProfileCard } from './task-profile-card';

describe('TaskProfileCard', () => {
  let component: TaskProfileCard;
  let fixture: ComponentFixture<TaskProfileCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskProfileCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProfileCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
