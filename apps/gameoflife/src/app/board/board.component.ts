import {
  AfterViewInit, ChangeDetectorRef,
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

  @Input() boardSize!: { x: number, y: number };
  @ViewChildren('viewContainerRef', {read: ViewContainerRef}) viewContainerRef!: QueryList<ViewContainerRef>;

  board: Array<Array<ComponentFactory<CellComponent>>> = [];

  constructor(private _resolver: ComponentFactoryResolver, private _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.createBoard();
  }

  ngAfterViewInit(): void {
    this.displayBoard();
  }

  private createBoard() {
    this.board = [];
    const {x, y} = this.boardSize;
    for (let i = 0; i < x; i++) {
      this.board.push([]);
      for (let ii = y; ii > 0; ii--) {
        const factory = this._resolver.resolveComponentFactory(CellComponent);
        this.board[i].push(factory);
      }
    }
  }

  private displayBoard() {
    const {x, y} = this.boardSize;
    for (let i = 0; i < x; i++) {
      for (let ii = 0; ii < y; ii++) {
        const vc = this.viewContainerRef.get(i * x + ii);
        const cell = vc?.createComponent(this.board[i][ii]);
        if (cell) cell.instance.alive = false;
      }
    }
    this._cd.detectChanges();
  }

  // private calculateNextCycle() {
  //
  // }

}
