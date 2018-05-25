import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { NO_ERRORS_SCHEMA, Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../models/item';
import { By } from '@angular/platform-browser';
import { IBasketItem } from '../../models/basket-item';

@Component({
  selector: 'app-item-block',
  template: '<div></div>'
})
class MockItemBlockComponent {
  @Input()
  item: IItem;

  @Output()
  addItemToBasket: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

}

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let testItems: IItem[];

  beforeEach(async(() => {
    testItems = [
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

    TestBed.configureTestingModule({
      declarations: [ ItemListComponent, MockItemBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    component.items = testItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass items to block correctly', () => {
    const mockItemBlockComponentEls = fixture.debugElement.queryAll(By.directive(MockItemBlockComponent));
    const mockItemListComponents = mockItemBlockComponentEls.map(x => x.injector.get(MockItemBlockComponent) as MockItemBlockComponent);

    expect(mockItemListComponents[0].item).toEqual(testItems[0]);
    expect(mockItemListComponents[1].item).toEqual(testItems[1]);
    expect(mockItemListComponents[2].item).toEqual(testItems[2]);
  });

  it('should emit events correctly', () => {
    spyOn(component.addItemToBasket, 'emit').and.callFake(() => {});
    const mockItemBlockComponentEls = fixture.debugElement.queryAll(By.directive(MockItemBlockComponent));
    const mockItemListComponents = mockItemBlockComponentEls.map(x => x.injector.get(MockItemBlockComponent) as MockItemBlockComponent);
    const testEvent: IBasketItem = {
      id: testItems[0].id,
      quantity: 24
    };
    mockItemListComponents[0].addItemToBasket.emit(testEvent);
    expect(component.addItemToBasket.emit).toHaveBeenCalledTimes(1);
    expect(component.addItemToBasket.emit).toHaveBeenCalledWith(testEvent);
  });
});
