import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurumComponent } from './durum.component';

describe('DurumComponent', () => {
  let component: DurumComponent;
  let fixture: ComponentFixture<DurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
