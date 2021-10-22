import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableTableComponent } from './injectable-table.component';

describe('InjectableTableComponent', () => {
  let component: InjectableTableComponent;
  let fixture: ComponentFixture<InjectableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
