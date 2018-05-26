import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface IOrderModalDialogData {
  itemName: string;
  itemId: string;
}

export interface IOrderModalDialogResult {
  itemId: string;
  quantity: number;
}

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent {

  quantity: number;

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IOrderModalDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
