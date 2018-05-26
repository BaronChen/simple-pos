import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleContainerComponent } from './console-container.component';
import { Store, StoreModule, INITIAL_STATE } from '@ngrx/store';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../models/item';
import { IConsoleState } from '../reducers';
import { getFlatArray } from '../../shared/models/flat-array';
import { IBasketItem, IBasketItemDetail } from '../models/basket-item';
import { LoadItems } from '../actions/items.actions';
import { By } from '@angular/platform-browser';
import { AddOrUpdateItemInBasket, RemoveItemFromBasket, SubmitOrder } from '../actions/basket.actions';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-basket',
  template: '<div></div>'
})
class MockBasketComponent {
  @Input()
  basketItems: IBasketItemDetail[];

  @Input()
  isMobile: boolean;

  @Input()
  total: number;

  @Output()
  removeItem: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  submitOrder: EventEmitter<any> = new EventEmitter();

}

@Component({
  selector: 'app-item-list',
  template: '<div></div>'
})
class MockItemListComponent {
  @Input()
  items: IItem[];

  @Output()
  addItemToBasket: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
}

describe('ConsoleContainerComponent', () => {
  let component: ConsoleContainerComponent;
  let fixture: ComponentFixture<ConsoleContainerComponent>;
  let store: Store<any>;
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
      totalPrice: 100,
      basketItems: getFlatArray(testBasketItems)
    }
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), LayoutModule],
      declarations: [ConsoleContainerComponent, MockBasketComponent, MockItemListComponent],
      providers: [{
        provide: INITIAL_STATE, useValue:
          {
            console: testState
          }
      }]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callFake(() => { });
    fixture.detectChanges();
  });

  it('should create and try to load items', () => {
    expect(component).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(new LoadItems());
  });

  it('should pass items to item-list component ', () => {
    const mockItemListComponentEl = fixture.debugElement.query(By.directive(MockItemListComponent));
    const mockItemListComponent = mockItemListComponentEl.injector.get(MockItemListComponent) as MockItemListComponent;

    expect(mockItemListComponent.items).toEqual(testItems);
  });

  it('should dispatch event to add item to basket', () => {
    (store.dispatch as any).calls.reset();
    const mockItemListComponentEl = fixture.debugElement.query(By.directive(MockItemListComponent));
    const mockItemListComponent = mockItemListComponentEl.injector.get(MockItemListComponent) as MockItemListComponent;
    const testEvent: IBasketItem = {
      id: testItems[0].id,
      quantity: 24
    };
    mockItemListComponent.addItemToBasket.emit(testEvent);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(new AddOrUpdateItemInBasket(testEvent));
  });

  it('should send correct basket item details to BasketComponent', () => {
    const mockBasketComponentEl = fixture.debugElement.query(By.directive(MockBasketComponent));
    const mockBasketComponent = mockBasketComponentEl.injector.get(MockBasketComponent) as MockBasketComponent;

    expect(mockBasketComponent.basketItems).toEqual([
      {
        id: testBasketItems[0].id,
        quantity: testBasketItems[0].quantity,
        name: testItems[0].name,
        subtotal: 49.9
      },
      {
        id: testBasketItems[1].id,
        quantity: testBasketItems[1].quantity,
        name: testItems[1].name,
        subtotal: 11.97
      }
    ]);

    expect(mockBasketComponent.total).toEqual(61.87);
  });

  it('should dispatch RemoveItemFromBasket action when event emited', () => {
    (store.dispatch as any).calls.reset();
    const mockBasketComponentEl = fixture.debugElement.query(By.directive(MockBasketComponent));
    const mockBasketComponent = mockBasketComponentEl.injector.get(MockBasketComponent) as MockBasketComponent;
    mockBasketComponent.removeItem.emit(testBasketItems[0].id);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(new RemoveItemFromBasket(testBasketItems[0].id));
  });

  it('should dispatch SubmitOrder action when event emited', () => {
    (store.dispatch as any).calls.reset();
    const mockBasketComponentEl = fixture.debugElement.query(By.directive(MockBasketComponent));
    const mockBasketComponent = mockBasketComponentEl.injector.get(MockBasketComponent) as MockBasketComponent;
    mockBasketComponent.submitOrder.emit();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(new SubmitOrder());
  });

});
