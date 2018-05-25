import { reducer, initialState } from './items.reducer';
import * as itemsAction from '../actions/items.actions';
import { IItem } from '../models/item';

describe('Items Reducer', () => {
  describe('Common', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('LoadItemsSuccess Action', () => {
    it('should return state with items', () => {
      const testItem: IItem[] = [
        {
          id: 'test_item_id_1',
          name: 'test_item_1',
          imageUrl: 'test_item_url_1',
          price: 10
        },
        {
          id: 'test_item_id_2',
          name: 'test_item_2',
          imageUrl: 'test_item_url_2',
          price: 20
        },
        {
          id: 'test_item_id_3',
          name: 'test_item_3',
          imageUrl: 'test_item_url_3',
          price: 30
        }
      ];

      const action: itemsAction.LoadItemsSuccess = {
        type: itemsAction.ItemsActionTypes.LoadItemsSuccess,
        payload: testItem
      };

      const result = reducer(initialState, action);
      expect(result).not.toBe(initialState);
      expect(result.ids.length).toBe(3);
      expect(result.ids).toEqual(testItem.map(x => x.id));
      expect(result.byId[testItem[0].id]).toEqual(testItem[0]);
      expect(result.byId[testItem[1].id]).toEqual(testItem[1]);
      expect(result.byId[testItem[2].id]).toEqual(testItem[2]);
    });
  });

  describe('LoadItems Action', () => {
    it('should return the initial state', () => {
      const action: itemsAction.LoadItems = {
        type: itemsAction.ItemsActionTypes.LoadItems
      };

      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

});
