import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter.actions';

interface Counter { 
    count: number;
    color: string ;
}

@Component({
  selector: 'nx-workspace-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent implements AfterViewInit {
  counter$: Observable<Counter>;
  countValue = 0;
  @ViewChild('countElement') countElement!: ElementRef;

  constructor(private store: Store<{ counter: Counter }>) {
    this.counter$ = store.select('counter');
  }

  ngAfterViewInit() {
      
    this.counter$.subscribe(counter => {
      this.countValue = counter.count;  
      this.countElement.nativeElement.style.color = counter.color
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}