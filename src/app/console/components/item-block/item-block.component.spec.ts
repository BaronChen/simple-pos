import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlockComponent } from './item-block.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { IItem } from '../../models/item';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { IOrderModalDialogResult, OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatDialog } from '@angular/material';
import { TestScheduler } from 'rxjs/testing';

export class MatDialogMock {

  constructor(private testData: IOrderModalDialogResult) {}

  open() {
    return {
      afterClosed: () => of(this.testData)
    };
  }
}

describe('ItemBlockComponent', () => {
  let component: ItemBlockComponent;
  let fixture: ComponentFixture<ItemBlockComponent>;
  let testItem: IItem;
  let testDialogResult: IOrderModalDialogResult;
  let testDialog: MatDialogMock;

  beforeEach(async(() => {
    testItem = {
      id: 'test_item_id_1',
      name: 'test_item_1',
      imageUrl: 'test_item_url_1',
      price: 10
    };

    testDialogResult = {
      itemId: testItem.id,
      quantity: 5
    };

    testDialog = new MatDialogMock(testDialogResult);

    TestBed.configureTestingModule({
      declarations: [ ItemBlockComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MatDialog, useFactory: () => testDialog
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBlockComponent);
    component = fixture.componentInstance;
    component.item = testItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render base on item', () => {
    const imgEl = fixture.debugElement.query(By.css('img'));
    expect(imgEl.nativeElement.getAttribute('src')).toEqual(testItem.imageUrl);
    const titleEl = fixture.debugElement.query(By.css('mat-card-title'));
    expect(titleEl.query(By.css('h2')).nativeElement.textContent).toContain(testItem.name);
    const priceEl = fixture.debugElement.query(By.css('mat-card-subtitle'));
    expect(priceEl.nativeElement.textContent).toContain(testItem.price);
  });

  it('should open dialog', () => {
    spyOn(testDialog, 'open').and.callThrough();
    spyOn(component.addItemToBasket, 'emit').and.callFake(() => {});
    const btnEl = fixture.debugElement.query(By.css('button'));
    btnEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(testDialog.open).toHaveBeenCalledTimes(1);
      expect(testDialog.open).toHaveBeenCalledWith(OrderDialogComponent, {
        maxWidth: '300px',
        data: {
          itemName: testItem.name,
          itemId: testItem.id
        }
      });

      expect(component.addItemToBasket.emit).toHaveBeenCalledTimes(1);
      expect(component.addItemToBasket.emit).toHaveBeenCalledWith({
        id: testDialogResult.itemId,
        quantity: testDialogResult.quantity
      });

    });
  });
});
