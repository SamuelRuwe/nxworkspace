import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinLearningWasmComponent } from './linkedin-learning-wasm.component';

describe('LinkedinLearningWasmComponent', () => {
  let component: LinkedinLearningWasmComponent;
  let fixture: ComponentFixture<LinkedinLearningWasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinLearningWasmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinLearningWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
