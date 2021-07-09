import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CellComponent } from '../cell/cell.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [MatGridListModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
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

    test('all elements in the board should be dead cells', () => {
      const aliveCells = component.board.flat().filter(cell => cell.alive);
      expect(aliveCells.length).toBe(0);
    });

  });

  test('viewContainerRef length should be 100 when board is 10 x 10', () => {
    expect(component.viewContainerRef.length).toBe(100);
  });

  test('calling reset should set all cells to dead', () => {
    component.board.flat().forEach(cell => cell.alive = true);
    component.reset();
    const result = component.board.flat().filter(cell => cell.alive);
    expect(result.length).toEqual(0);
  });

  describe('nextCycle', () => {

    let board: Array<Array<CellComponent>>;
    let testCell: CellComponent;
    let neighbor1: CellComponent;
    let neighbor2: CellComponent;
    let neighbor3: CellComponent;
    let neighbor4: CellComponent;
    let neighbor5: CellComponent;
    let neighbor6: CellComponent;
    let neighbor7: CellComponent;
    let neighbor8: CellComponent;

    beforeEach(() => {
      board = component.board;
      testCell = board[1][1];
      neighbor1 = board[0][0];
      neighbor2 = board[0][1];
      neighbor3 = board[0][2];
      neighbor4 = board[1][0];
      neighbor5 = board[1][2];
      neighbor6 = board[2][0];
      neighbor7 = board[2][1];
      neighbor8 = board[2][2];
    });

    test('a cell with zero neighbors dies', () => {
      testCell.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeFalsy();
    });

    test('a cell with one neighbor dies on next cycle', () => {
      testCell.alive = true;
      neighbor1.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeFalsy();
    });

    test('a living cell with four or more neighbors dies on next cycle', () => {
      testCell.alive = true;
      neighbor1.alive = true;
      neighbor2.alive = true;
      neighbor3.alive = true;
      neighbor4.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeFalsy();
    });

    test('a living cell with eight neighbors dies on next cycle', () => {
      testCell.alive = true;
      neighbor1.alive = true;
      neighbor2.alive = true;
      neighbor3.alive = true;
      neighbor4.alive = true;
      neighbor5.alive = true;
      neighbor6.alive = true;
      neighbor7.alive = true;
      neighbor8.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeFalsy();
    });

    test('a living cell with two or three neighbors does not die on next cycle', () => {
      testCell.alive = true;
      neighbor1.alive = true;
      neighbor2.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeTruthy();
      neighbor3.alive = true;
      expect(testCell.alive).toBeTruthy();
    });

    test('a dead cell with three neighbors becomes alive on next cycle', () => {
      neighbor1.alive = true;
      neighbor2.alive = true;
      neighbor3.alive = true;
      component.nextCycle();
      expect(testCell.alive).toBeTruthy();
    });

  });
});
