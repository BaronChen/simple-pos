import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';

import { BasketEffects } from './basket.effects';
import { ConsoleService } from '../services/console.service';
import { Store, INITIAL_STATE, StoreModule } from '@ngrx/store';
import { IConsoleState } from '../reducers';
import { IBasketItem } from '../models/basket-item';
import { IItem } from '../models/item';
import { getFlatArray } from '../../shared/models/flat-array';
import { hot, cold } from 'jasmine-marbles';
import { SubmitOrder, ClearBasket } from '../actions/basket.actions';

describe('BasketEffect', () => {
  let actions$: Observable<any>;
  let effects: BasketEffects;
  let mockConsoleService: any;

  const testItems: IItem[] = [
    {
      id: 'test_item_id_1',
      name: 'test_item_1',
      imageUrl: 'test_item_url_1',
      price: 4.99
    },
    {
      id: 'test_item_id_2',
      name: 'test_item_2',
      imageUrl: 'test_item_url_2',
      price: 3.99
    },
    {
      id: 'test_item_id_3',
      name: 'test_item_3',
      imageUrl: 'test_item_url_3',
      price: 5.99
    }
  ];

  const testBasketItems: IBasketItem[] = [
    {
      id: 'test_item_id_1',
      quantity: 10
    },
    {
      id: 'test_item_id_2',
      quantity: 3
    }
  ];

  const testState: IConsoleState = {
    items: getFlatArray(testItems),
    basket: {
      basketItems: getFlatArray(testBasketItems)
    }
  };

  beforeEach(() => {
    mockConsoleService = {
      submitPurchase: () => of('')
    };
    spyOn(mockConsoleService, 'submitPurchase').and.callThrough();
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        BasketEffects,
        provideMockActions(() => actions$),
        { provide: ConsoleService, useFactory: () => mockConsoleService },
        {
          provide: INITIAL_STATE, useValue:
            {
              console: testState
            }
        }
      ]
    });

    effects = TestBed.get(BasketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should send purchase event to service', () => {
    const action = new SubmitOrder();
    const expectedAction = new ClearBasket();
    actions$ = hot('-a-', { a: action });
    const expected = cold('-b', {b: expectedAction});

    expect(effects.submitOrderEffect$).toBeObservable(expected);

    effects.submitOrderEffect$.subscribe(x => {
      expect(mockConsoleService.submitPurchase).toHaveBeenCalledTimes(1);
      expect(mockConsoleService.submitPurchase).toHaveBeenCalledWith(61.87);
    });
  });

});
