import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCloseWrapperComponent } from './submit-close-wrapper.component';

describe('SubmitCloseWrapperComponent', () => {
  let component: SubmitCloseWrapperComponent;
  let fixture: ComponentFixture<SubmitCloseWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCloseWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCloseWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
