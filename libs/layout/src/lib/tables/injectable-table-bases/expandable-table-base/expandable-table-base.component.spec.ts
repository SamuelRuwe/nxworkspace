import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTableBaseComponent } from './expandable-table-base.component';

describe('ExpandableTableComponent', () => {
  let component: ExpandableTableBaseComponent;
  let fixture: ComponentFixture<ExpandableTableBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableTableBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTableBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
