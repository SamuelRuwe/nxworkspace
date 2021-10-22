import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportObjComponent } from './import-obj.component';

describe('ImportObjComponent', () => {
  let component: ImportObjComponent;
  let fixture: ComponentFixture<ImportObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
