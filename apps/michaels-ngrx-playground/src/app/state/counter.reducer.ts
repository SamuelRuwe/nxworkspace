import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
    count: 0,
    color: 'red',
    colors: ["red", "orange", "yellow", "green", "blue", "violet", "purple"]
};


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    const newCount = state.count > 5 ? 0 : state.count + 1;
    return { ...state, count: newCount, color: state.colors[newCount] } 
  }),
  on(decrement, (state) => {
    const newCount = state.count < 1 ? 6 : state.count - 1;
    return { ...state, count: newCount, color: state.colors[newCount] } 
  }),
  on(reset, (state) => ({ ...state, count: 0, color: 'red' }))
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
