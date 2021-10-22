import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'nx-workspace-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit, AfterViewInit {

  constructor(private _resolver: ComponentFactoryResolver, private _cd: ChangeDetectorRef) {}

  @Input() boardSize!: { x: number, y: number };
  @ViewChildren('viewContainerRef', {read: ViewContainerRef}) viewContainerRef!: QueryList<ViewContainerRef>;

  factory!: ComponentFactory<CellComponent>;
  board: Array<Array<CellComponent>> = [];
  domBoard: Array<Array<null>> = [];

  ngOnInit(): void {
    this.factory = this._resolver.resolveComponentFactory(CellComponent);
    this.createBoard();
  }

  ngAfterViewInit(): void {
    this.displayBoard();
  }

  private createBoard() {
    this.domBoard = [];
    const {x, y} = this.boardSize;
    for (let i = 0; i < x; i++) {
      this.domBoard.push([]);
      for (let j = 0; j < y; j++)
        this.domBoard[i].push(null);
    }
  }

  private displayBoard() {
    const {x, y} = this.boardSize;
    for (let i = 0; i < x; i++) {
      this.board.push([]);
      for (let ii = 0; ii < y; ii++) {
        const vc = this.viewContainerRef.get(i * x + ii);
        const cell = vc?.createComponent(this.factory).instance;
        if (cell) {
          this.board[i].push(cell);
          cell.alive = false;
        } else {
          throw new Error('Cell is null');
        }
      }
    }

    this._cd.detectChanges();
  }

  reset() {
    this.board.flat().forEach(cell => cell.alive = false);
  }

  nextCycle() {
    console.log('calculate next cycle called');
  }

}
