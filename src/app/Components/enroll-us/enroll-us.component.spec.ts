import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollUsComponent } from './enroll-us.component';

describe('EnrollUsComponent', () => {
  let component: EnrollUsComponent;
  let fixture: ComponentFixture<EnrollUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
