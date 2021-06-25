import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatGridListModule } from '@angular/material/grid-list';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [MatGridListModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.boardSize = {x: 10, y: 10};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('board component board', () => {

    test('board should be filled with non null values', () => {
      const result = component.board.flat().filter(tile => tile != null);
      expect(result.length).toBe(100);
    });

  });

  describe('board component viewContainerRef', () => {

    test('viewContainerRef length should be 100 when board is 10 x 10', () => {
      expect(component.viewContainerRef.length).toBe(100);
    });
  });

});
