import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWasmComponent } from './first-wasm.component';

describe('FirstWasmComponent', () => {
  let component: FirstWasmComponent;
  let fixture: ComponentFixture<FirstWasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWasmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
