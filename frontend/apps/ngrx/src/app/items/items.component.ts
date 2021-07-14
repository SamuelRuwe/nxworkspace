import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectItemEntities, selectItemsTotal } from '../state/items/items.selector';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$!: Observable<Dictionary<{ id: number; name: string }>>;

  constructor(private store: Store<{ items: { id: number; name: string; } }>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(selectItemEntities));
  }

  onClick(item: { id: number, name: string }) {
    this.store.select(selectItemsTotal).subscribe(res => console.log(res));
    // this.store.dispatch(deleteItem(item));
  }

}
