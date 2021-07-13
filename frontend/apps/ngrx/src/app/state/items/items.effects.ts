import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence, optimisticUpdate } from '@nrwl/angular';
import { ItemsService } from '../../items/items.service';
import { deleteItem, deleteItemSuccess, itemsLoadedSuccess, appLoaded, } from './items.action';
import { map } from 'rxjs/operators';
import { TypedAction } from '@ngrx/store/src/models';


@Injectable({providedIn: 'root'})
export class ItemsEffects {

  constructor(
    private dataPersistence: DataPersistence<Array<{ id: number, name: string }>>,
    private itemsService: ItemsService,
    private actions: Actions) {}

  loadItems$ = createEffect(() => {
    return this.dataPersistence.fetch(appLoaded, {
      run: (action: { id: number; name: string } & TypedAction<''>, state: Array<{ id: number, name: string }>) => {
        return this.itemsService.loadItems()
          .pipe(map(res => itemsLoadedSuccess({items: res})));
      },
      onError(action: any, error: Error) {
        console.error(error);
      }
    });
  });

  // export const deleteItem = createAction(
  //   '[Items] Delete Item',
  //   props<{ id: number; name: string; }>()
  // );

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

  // Implement with Optimistic Update
  deleteItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteItem),
      optimisticUpdate({
        run: (a: ReturnType<typeof deleteItem>) => {
          return this.itemsService.deleteItem({id: a.id, name: a.name})
            .pipe(map(() => {
                return deleteItemSuccess();
              })
            );
        },
        undoAction() {
          // This should be an undo action, not just what I have here
          return deleteItemSuccess();
        }
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
