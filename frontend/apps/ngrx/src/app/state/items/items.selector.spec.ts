import * as fromSelectors from './items.selector';

describe('Items Selector', () => {
  it('should select the item entities', () => {
    const initialState = {
      items: {
        ids: [1, 2],
        entities: {
          1: {id: 1, name: 'Item One'},
          2: {id: 2, name: 'Item Two'}
        },
        selectedItemId: null
      }
    }

    const result = fromSelectors.selectItemEntities(initialState);

    expect(result['1']).toBe(initialState.items.entities['1']);
  });
});
