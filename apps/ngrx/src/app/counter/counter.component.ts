import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$!: Observable<number>;

  constructor(private _store: Store<{ count: number }>) {
    this.count$ = _store.select('count');
  }

  increment() {
    this._store.dispatch(increment());
  }

  decrement() {
    this._store.dispatch(decrement());
  }

  reset() {
    this._store.dispatch(reset());
  }


}
