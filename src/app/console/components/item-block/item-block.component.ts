import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../models/item';
import { MatDialog } from '@angular/material';
import { OrderDialogComponent, IOrderModalDialogData, IOrderModalDialogResult } from './order-dialog/order-dialog.component';
import { IBasketItem } from '../../models/basket-item';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css']
})
export class ItemBlockComponent implements OnInit {

  @Input()
  item: IItem;

  @Output()
  addItemToBasket: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const data: IOrderModalDialogData = {
      itemName: this.item.name,
      itemId: this.item.id
    };
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      maxWidth: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result: IOrderModalDialogResult) => {
      this.addItemToBasket.emit({id: result.itemId, quantity: result.quantity});
    });
  }

  ngOnInit() {
  }

}
