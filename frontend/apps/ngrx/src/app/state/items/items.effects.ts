import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence, optimisticUpdate } from '@nrwl/angular';
import { ItemsService } from '../../items/items.service';
import {
  appLoaded,
  deleteItem,
  deleteItemSuccess,
  itemsLoadedSuccess,
  loadItems,
  selectItem,
  updateItem,
} from './items.action';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectItemsIds } from './items.selector';
import { selectCurrentPokemon } from '../index';
import { PokemonActionTypes, UpdatePokemon } from '../pokemon/pokemon.actions';


@Injectable({providedIn: 'root'})
export class ItemsEffects {

  constructor(
    private dataPersistence: DataPersistence<Array<{ id: number, name: string }>>,
    private itemsService: ItemsService,
    private actions: Actions,
    private router: Router,
    private store: Store) {}

  loadItems$ = createEffect(() => {
    return this.dataPersistence.fetch(appLoaded, {
      run: () => this.itemsService.loadItems()
        .pipe(map(items => itemsLoadedSuccess({items})),
          tap(() => this.router.navigate(['/items']))),
      onError(action: ReturnType<typeof appLoaded>, error: Error) {
        console.error(error);
      }
    });
  });

  // Implement with Optimistic Update
  deleteItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteItem),
      optimisticUpdate({
        run: (a: ReturnType<typeof deleteItem>) => {
          return this.itemsService.deleteItem({id: a.id, name: a.name})
            .pipe(map(() => deleteItemSuccess({id: a.id})));
        },
        undoAction() {
          // This should be an undo action, not just what I have here
          return deleteItemSuccess({id: 1});
        }
      })
    )
  );

  exampleEffect$ = createEffect(() =>
    this.actions.pipe(
      ofType(PokemonActionTypes.UpdatePokemon),
      concatLatestFrom(() => this.store.select(selectCurrentPokemon)),
      map(([action, latest]) => {
        // someService.doSomething(latest);

        return loadItems();
      })
    )
  );

  // Implement with Pessimistic Update
  // deleteItem$ = createEffect(() => {
  //   return this.dataPersistence.fetch(deleteItem, {
  //     run: (action: { id: number, name: string } & typeof deleteItem) => {
  //       return this.itemsService.deleteItem({id: action.id, name: action.name})
  //         .pipe(
  //           map(() => {
  //             return deleteItemSuccess();
  //           })
  //         );
  //     }
  //   });
  // });

}
