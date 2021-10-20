import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelListComponent } from './expansion-panel-list.component';

describe('ExpansionPanelComponent', () => {
  let component: ExpansionPanelListComponent;
  let fixture: ComponentFixture<ExpansionPanelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
