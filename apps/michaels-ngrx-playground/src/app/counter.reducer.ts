import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
    count: 0,
    color: 'red',
    colors: ["red", "orange", "yellow", "green", "blue", "violet", "purple"]
};


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state = { ...state, count: state.count > 5 ? 0 : state.count + 1, color: state.colors[state.count] }),
  on(decrement, (state) => state = { ...state, count: state.count < 1 ? 6 : state.count - 1, color: state.colors[state.count] }),
  on(reset, (state) => state = { ...state, count: 0 })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
