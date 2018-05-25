import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { ItemsEffects } from './items.effects';
import { ConsoleService } from '../services/console.service';
import { IItem } from '../models/item';
import { LoadItems, LoadItemsSuccess } from '../actions/items.actions';

describe('ItemsService', () => {
  let actions$: Observable<any>;
  let effects: ItemsEffects;
  let mockConsoleService: any;
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

  beforeEach(() => {
    mockConsoleService = {
      getItems: () => of(testItems)
    };
    spyOn(mockConsoleService, 'getItems').and.callThrough();
    TestBed.configureTestingModule({
      providers: [
        ItemsEffects,
        provideMockActions(() => actions$),
        {provide: ConsoleService, useFactory: () => mockConsoleService }
      ]
    });

    effects = TestBed.get(ItemsEffects);
  });

  it('should be be able to load items', () => {
    const action = new LoadItems();
    const completion = new LoadItemsSuccess(testItems);
    actions$ = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadItemsEffect$).toBeObservable(expected);
  });
});
