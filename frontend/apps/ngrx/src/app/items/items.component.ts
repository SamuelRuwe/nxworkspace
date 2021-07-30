import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectItemEntities } from '../state/items/items.selector';
import { Dictionary } from '@ngrx/entity';
import { selectItem } from '../state/items/items.action';
import { map } from 'rxjs/operators';

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
    // this.items$.pipe(map(item => console.log(item)));
    // console.log(this.items$);
  }

  onClick(item: { id: number, name: string }) {
    // this.store.select(selectItemsTotal).subscribe(res => console.log(res));
    // this.store.dispatch(deleteItem(item));
    this.store.dispatch(selectItem({id: 1}));
  }

}
