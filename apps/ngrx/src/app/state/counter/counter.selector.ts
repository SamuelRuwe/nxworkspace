import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, CounterState } from './counter.reducer';

export const selectCountState = createFeatureSelector<CounterState>(COUNTER_FEATURE_KEY);

export const selectCount = createSelector(
  selectCountState,
  (countState => countState.count)
);
