import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibwebpComponent } from './libwebp.component';

describe('LibwebpComponent', () => {
  let component: LibwebpComponent;
  let fixture: ComponentFixture<LibwebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibwebpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibwebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
