import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightQueensComponent } from './eight-queens.component';

describe('EightQueensComponent', () => {
  let component: EightQueensComponent;
  let fixture: ComponentFixture<EightQueensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightQueensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EightQueensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
