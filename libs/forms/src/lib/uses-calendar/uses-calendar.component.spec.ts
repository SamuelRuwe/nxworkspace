import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesCalendarComponent } from './uses-calendar.component';

describe('UsesCalendarComponent', () => {
  let component: UsesCalendarComponent;
  let fixture: ComponentFixture<UsesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsesCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
