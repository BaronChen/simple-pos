import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Output()
  submitOrder: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
