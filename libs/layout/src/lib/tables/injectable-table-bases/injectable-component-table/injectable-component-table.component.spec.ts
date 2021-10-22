import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableComponentTableComponent } from './injectable-component-table.component';

describe('TableTemplateComponent', () => {
  let component: InjectableComponentTableComponent<any>;
  let fixture: ComponentFixture<InjectableComponentTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableComponentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectableComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
