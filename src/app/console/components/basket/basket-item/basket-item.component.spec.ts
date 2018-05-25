import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemComponent } from './basket-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IBasketItemDetail } from '../../../models/basket-item';
import { By } from '@angular/platform-browser';

describe('BasketItemComponent', () => {
  let component: BasketItemComponent;
  let fixture: ComponentFixture<BasketItemComponent>;

  const testBasketItem: IBasketItemDetail = {
    id: 'test_id_1',
    name: 'test_name_1',
    quantity: 4,
    subtotal: 20
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketItemComponent);
    component = fixture.componentInstance;
    component.basketItem = testBasketItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render base on input', () => {
    const titleEl = fixture.debugElement.query(By.css('h4'));
    expect(titleEl.nativeElement.textContent).toContain(testBasketItem.name);
    const quantityEl = fixture.debugElement.query(By.css('mat-chip'));
    expect(quantityEl.nativeElement.textContent).toContain(testBasketItem.quantity);
    const subtotalEl = fixture.debugElement.query(By.css('h5'));
    expect(subtotalEl.nativeElement.textContent).toContain(testBasketItem.subtotal);
  });

  it('should emit removeItem event when button clicked', () => {
    spyOn(component.removeItem, 'emit').and.callFake(() => {});
    const btnEl = fixture.debugElement.query(By.css('button'));
    btnEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.removeItem.emit).toHaveBeenCalledTimes(1);
      expect(component.removeItem.emit).toHaveBeenCalledWith(testBasketItem.id);
    });
  });

});
