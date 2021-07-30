import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryObjectComponent } from './memory-object.component';

describe('MemoryObjectComponent', () => {
  let component: MemoryObjectComponent;
  let fixture: ComponentFixture<MemoryObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
