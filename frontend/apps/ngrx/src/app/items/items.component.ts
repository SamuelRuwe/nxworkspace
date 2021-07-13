import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { deleteItem } from '../state/items/items.action';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$!: Observable<{ id: number, name: string }>;

  constructor(private store: Store<{ items: { id: number; name: string; } }>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select('items'));
  }

  onClick(item: { id: number, name: string }) {
    this.store.dispatch(deleteItem(item));
  }

}
