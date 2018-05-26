
import * as fromMyReducers from './';
import { IItem } from '../models/item';
import { getFlatArray } from '../../shared/models/flat-array';
import { IBasketItemDetail } from '../models/basket-item';

describe('Console Selectors', () => {

  it('getItems should return item array', () => {
    const testItems: IItem[] = [
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
    const testState = getFlatArray(testItems);
    expect(fromMyReducers.getItems.projector(testState)).toEqual(testItems);
  });

  it('getBasketItemDetails should calculate subtotal correctly 1', () => {
    const testState = getTestState(10, 10);
    expect(fromMyReducers.getBasketItemDetails.projector(testState.items, testState.basket)[0].subtotal).toEqual(100);
  });

  it('getBasketItemDetails should calculate subtotal correctly 2', () => {
    const testState = getTestState(3.99, 3);
    expect(fromMyReducers.getBasketItemDetails.projector(testState.items, testState.basket)[0].subtotal).toEqual(11.97);
  });

  it('getBasketItemDetails should calculate subtotal correctly 3', () => {
    const testState = getTestState(5.5, 3);
    expect(fromMyReducers.getBasketItemDetails.projector(testState.items, testState.basket)[0].subtotal).toEqual(16.5);
  });

  it('getBasketItemDetails should calculate subtotal correctly 4', () => {
    const testState = getTestState(7.33, 3);
    expect(fromMyReducers.getBasketItemDetails.projector(testState.items, testState.basket)[0].subtotal).toEqual(21.99);
  });


  it('getTotal should calculate total amount correctly 1', () => {
    const testItems = getTestBasketItems(3.33, 4.33, 2.33);
    expect(fromMyReducers.getTotal.projector(testItems)).toEqual(9.99);
  });

  it('getTotal should calculate total amount correctly 2', () => {
    const testItems = getTestBasketItems(2.99, 3.99, 4.99);
      expect(fromMyReducers.getTotal.projector(testItems)).toEqual(11.97);
  });

  it('getTotal should calculate total amount correctly 2', () => {
    const testItems = getTestBasketItems(2.06, 3.93, 4.01);
      expect(fromMyReducers.getTotal.projector(testItems)).toEqual(10);
  });

  function getTestState(price: number, quantity: number): fromMyReducers.IConsoleState {
    return {
      items: {
        byId: {
          'test_item_id_1': {
            id: 'test_item_id_1',
            name: 'test_item_1',
            imageUrl: 'test_item_url_1',
            price: price
          }
        },
        ids: ['test_item_id_1']
      },
      basket: {
        basketItems: {
          byId: {
            'test_item_id_1': {
              id: 'test_item_id_1',
              quantity: quantity
            },
          },
          ids: ['test_item_id_1']
        }
      }
    };
  }

  function getTestBasketItems(subtotal1: number, subtotal2: number, subtotal3: number): IBasketItemDetail[] {
    return [
      {
        id: 'test_id_1',
        name: 'test_name_1',
        quantity: 4,
        subtotal: subtotal1
      },
      {
        id: 'test_id_2',
        name: 'test_name_2',
        quantity: 6,
        subtotal: subtotal2
      },
      {
        id: 'test_id_3',
        name: 'test_name_3',
        quantity: 8,
        subtotal:subtotal3
      }
    ];
  }

});
