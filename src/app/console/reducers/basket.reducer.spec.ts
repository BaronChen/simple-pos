import { reducer, initialState, IBasketState } from './basket.reducer';
import * as basketAction from '../actions/basket.actions';
import { IBasketItem } from '../models/basket-item';
import { getFlatArray } from '../../shared/models/flat-array';

describe('Basket Reducer', () => {
  describe('Common', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('UpdateTotalPrice Action', () => {
    it('Should update the price with new number ', () => {
      const testNumber = 9999;
      const action: basketAction.UpdateTotalPrice = {
        type: basketAction.BasketActionTypes.UpdateTotalPrice,
        payload:  testNumber
      };

      const result = reducer(initialState, action);

      expect(result).not.toBe(initialState);
      expect(result.totalPrice).toEqual(testNumber);

    });
  });

  describe('AddOrUpdateItemInBasket Action', () => {
    it('Should add the new item to array', () => {
      const testItem: IBasketItem = {
        id: 'test_id_1',
        quantity: 200
      };
      const action: basketAction.AddOrUpdateItemInBasket = {
        type: basketAction.BasketActionTypes.AddOrUpdateItemInBasket,
        payload: testItem
      };

      const result = reducer(initialState, action);

      expect(result).not.toBe(initialState);
      expect(result.basketItems).not.toBe(initialState.basketItems);
      expect(result.basketItems.ids.length).toEqual(1);
      expect(result.basketItems.byId[testItem.id]).toEqual(testItem);
    });

    it('Should update the exist item in array', () => {
      const updatedItem: IBasketItem = {
        id: 'test_id_1',
        quantity: 100
      };
      const originalItems: IBasketItem[] = [
        {
          id: 'test_id_1',
          quantity: 200
        },
        {
          id: 'test_id_3',
          quantity: 300
        }
      ];
      const action: basketAction.AddOrUpdateItemInBasket = {
        type: basketAction.BasketActionTypes.AddOrUpdateItemInBasket,
        payload: updatedItem
      };

      const testState: IBasketState = {
        totalPrice: 0,
        basketItems: getFlatArray<IBasketItem>([...originalItems])
      };

      const result = reducer(testState, action);

      expect(result).not.toBe(testState);
      expect(result.basketItems).not.toBe(testState.basketItems);

      expect(result.basketItems.ids.length).toEqual(2);
      expect(result.basketItems.byId[updatedItem.id]).toEqual(updatedItem);
    });
  });

  describe('RemoveItemFromBasket Action', () => {
    it('Should remove the item from array', () => {
      const testItem: IBasketItem = {
        id: 'test_id_1',
        quantity: 100
      };
      const otherItems: IBasketItem[] = [
        {
          id: 'test_id_2',
          quantity: 200
        },
        {
          id: 'test_id_3',
          quantity: 300
        }
      ];
      const action: basketAction.RemoveItemFromBasket = {
        type: basketAction.BasketActionTypes.RemoveItemFromBasket,
        payload: testItem.id
      };

      const testState: IBasketState = {
        totalPrice: 0,
        basketItems: getFlatArray<IBasketItem>([testItem, ...otherItems])
      };

      const result = reducer(testState, action);
      expect(result).not.toBe(testState);
      expect(result.basketItems.ids.length).toEqual(2);
      expect(result.basketItems.ids).toEqual(otherItems.map(x => x.id));
      expect(result.basketItems.byId[otherItems[0].id]).toEqual(otherItems[0]);
      expect(result.basketItems.byId[otherItems[1].id]).toEqual(otherItems[1]);
    });
  });

  describe('ClearBasket Action', () => {
    it('should return the initial state', () => {
      const action: basketAction.ClearBasket = {
        type: basketAction.BasketActionTypes.ClearBasket
      };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('SubmitOrder Action', () => {
    it('should return the initial state', () => {
      const action: basketAction.SubmitOrder = {
        type: basketAction.BasketActionTypes.SubmitOrder
      };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

});
