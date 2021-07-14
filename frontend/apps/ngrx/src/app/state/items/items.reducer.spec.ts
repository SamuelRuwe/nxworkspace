import * as fromReducer from './items.reducer';

describe('items reducer', () => {
    describe('unknown action', () => {
      it('should return the default state', () => {
        const {initialState} = fromReducer;
        const action = {
          type: 'Unknown'
        }
        const state = fromReducer.itemsReducer(initialState, action);

        expect(state).toBe(initialState);
      });
    });
  }
);
