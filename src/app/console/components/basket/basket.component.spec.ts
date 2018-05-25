import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { NO_ERRORS_SCHEMA, Component, Input, EventEmitter, Output } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-basket-item',
  template: '<div></div>'
})
class MockBasketItemComponent {
  @Input()
  basketItem: IBasketItemDetail;

  @Output()
  removeItem: EventEmitter<string> = new EventEmitter<string>();

}

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  const testItems: IBasketItemDetail[] = [
    {
      id: 'test_id_1',
      name: 'test_name_1',
      quantity: 4,
      subtotal: 10
    },
    {
      id: 'test_id_2',
      name: 'test_name_2',
      quantity: 6,
      subtotal: 20
    },
    {
      id: 'test_id_3',
      name: 'test_name_3',
      quantity: 8,
      subtotal: 30
    }
  ];

  const testTotal = 60;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent, MockBasketItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    component.basketItems = testItems;
    component.total = testTotal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create pass basket items to children correcly', () => {
    const mockBasketItemComponentEls = fixture.debugElement.queryAll(By.directive(MockBasketItemComponent));
    const mockBasketItemComponent =
      mockBasketItemComponentEls.map(x => x.injector.get(MockBasketItemComponent) as MockBasketItemComponent);

    expect(mockBasketItemComponent[0].basketItem).toEqual(testItems[0]);
    expect(mockBasketItemComponent[1].basketItem).toEqual(testItems[1]);
    expect(mockBasketItemComponent[2].basketItem).toEqual(testItems[2]);

    const totalEl = fixture.debugElement.query(By.css('mat-toolbar-row')).children[0];
    expect(totalEl.nativeElement.textContent).toContain(testTotal);
  });

  it('should emit events correctly', () => {
    spyOn(component.removeItem, 'emit').and.callFake(() => {});
    const mockBasketItemComponentEls = fixture.debugElement.queryAll(By.directive(MockBasketItemComponent));
    const mockBasketItemComponent = mockBasketItemComponentEls.map(x => x.injector.get(MockBasketItemComponent) as MockBasketItemComponent);
    mockBasketItemComponent[1].removeItem.emit(mockBasketItemComponent[1].basketItem.id);
    expect(component.removeItem.emit).toHaveBeenCalledTimes(1);
    expect(component.removeItem.emit).toHaveBeenCalledWith(testItems[1].id);
  });

});
