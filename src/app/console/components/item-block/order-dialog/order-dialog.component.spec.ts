import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDialogComponent, IOrderModalDialogData } from './order-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { By } from '@angular/platform-browser';


describe('OrderDialogComponent', () => {
  let component: OrderDialogComponent;
  let fixture: ComponentFixture<OrderDialogComponent>;
  let testData: IOrderModalDialogData;

  beforeEach(async(() => {
    testData = {
      itemName: 'test_name',
      itemId: 'test_id'
    };
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ OrderDialogComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: testData}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render base on input data', () => {
    const el = fixture.debugElement.query(By.css('span'));
    expect(el.nativeElement.textContent).toContain(testData.itemName);
  });
});
