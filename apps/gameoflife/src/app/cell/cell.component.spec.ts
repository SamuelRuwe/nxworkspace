import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';
import { MatIconModule } from '@angular/material/icon';

describe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('toggleAlive should make a dead cell alive', () => {
    component.alive = false;
    component.toggleAlive();
    expect(component.alive).toBeTruthy();
  });

  test('toggleAlive should make an alive cell dead', () => {
    component.alive = true;
    component.toggleAlive();
    expect(component.alive).toBeFalsy();
  });

});
