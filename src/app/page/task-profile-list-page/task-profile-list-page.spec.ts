import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProfileListPage } from './task-profile-list-page';

describe('TaskProfileListPage', () => {
  let component: TaskProfileListPage;
  let fixture: ComponentFixture<TaskProfileListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskProfileListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProfileListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
