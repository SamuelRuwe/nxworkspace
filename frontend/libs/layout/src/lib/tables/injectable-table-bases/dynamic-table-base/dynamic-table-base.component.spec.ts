import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableBaseComponent } from './dynamic-table-base.component';

describe('DynamicTableComponent', () => {
  let component: DynamicTableBaseComponent<any>;
  let fixture: ComponentFixture<DynamicTableBaseComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
