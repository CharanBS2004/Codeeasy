import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsAndEventsComponent } from './workshops-and-events.component';

describe('WorkshopsAndEventsComponent', () => {
  let component: WorkshopsAndEventsComponent;
  let fixture: ComponentFixture<WorkshopsAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsAndEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
