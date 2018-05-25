import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  @Input()
  basketItems: IBasketItemDetail[];

  @Input()
  total: number;

  @Input()
  isMobile: boolean;

  @Output()
  removeItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

}
