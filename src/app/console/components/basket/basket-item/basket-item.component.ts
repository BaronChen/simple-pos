import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IBasketItemDetail } from '../../../models/basket-item';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input()
  basketItem: IBasketItemDetail;

  @Output()
  removeItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveItem() {
    this.removeItem.emit(this.basketItem.id);
  }

}
