import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { IItem } from '../../models/item';
import { IBasketItem } from '../../models/basket-item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  @Input()
  public items: IItem[];

  @Output()
  addItemToBasket: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  constructor() { }

  ngOnInit() {
  }

  onAddItemToBasket(data: IBasketItem) {
    this.addItemToBasket.emit(data);
  }

}
