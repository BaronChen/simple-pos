import { Component, OnInit, Input, Inject } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

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

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<IBasketItemDetail>;

  constructor(
    public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IReceiptData) {
      this.displayedColumns = ['name', 'quantity', 'subtotal'];
      this.dataSource = new MatTableDataSource(data.items);
    }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
