import { AbstractCellComponent, CallbackData, STRING_NUM } from '@nx-workspace/layout';

type Constructor<T> = new (...args: any[]) => T;

export function basicMixin<T, TBase extends Constructor<AbstractCellComponent<T>>>(Base: TBase) {
  return class Callback extends Base {
    test() {
      console.log('test');
    }
  }
}

export const TestCl = basicMixin(AbstractCellComponent);


// export function callbackMixin<Base extends Constructor, T>() {
//   return class CallbackCell extends Base {
//     callback() {
//       return this.data.callback(this.data.returnValue);
//     }
//   }
// }
//
// export const withCallback = callbackMixin<STRING_NUM>();
