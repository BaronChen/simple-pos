import { Component, OnInit, Input, Inject } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface IReceiptData {
  items: IBasketItemDetail[];
  amount: number;
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent  {

  constructor(
    public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IReceiptData) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
