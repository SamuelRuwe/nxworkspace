import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFieldsLineComponent } from './two-fields-line.component';

describe('TwoFieldsLineComponent', () => {
  let component: TwoFieldsLineComponent;
  let fixture: ComponentFixture<TwoFieldsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFieldsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFieldsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
