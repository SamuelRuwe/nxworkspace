import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteItem } from './items.action';

@Injectable()
export class ItemsFacade {

  allItems$ = this.store.pipe(select('items'));

  constructor(private store: Store<{ items: { id: number, name: string } }>) {}

  deleteItem(item: { id: number, name: string }) {
    this.store.dispatch(deleteItem({...item}));
  }

}

/**
 * The facade can help to remove the store logic from the components
 * but I don't see how it can fit with good action hygiene as we won't know where
 * the actions are coming from if we just offer a generic method for all instances of an event
 */
