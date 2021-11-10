import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLogWasmComponent } from './console-log-wasm.component';

describe('ConsoleLogWasmComponent', () => {
  let component: ConsoleLogWasmComponent;
  let fixture: ComponentFixture<ConsoleLogWasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleLogWasmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleLogWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
