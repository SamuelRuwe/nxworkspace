import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRefreshWrapperComponent } from './card-refresh-wrapper.component';

describe('CardRefreshWrapperComponent', () => {
  let component: CardRefreshWrapperComponent;
  let fixture: ComponentFixture<CardRefreshWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRefreshWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRefreshWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
