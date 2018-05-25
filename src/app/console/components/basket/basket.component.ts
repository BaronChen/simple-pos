import { Component, OnInit, Input } from '@angular/core';
import { IBasketItemDetail } from '../../models/basket-item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  @Input()
  basketItems: IBasketItemDetail;

  @Input()
  isMobile: boolean;

  constructor() {}

  ngOnInit() {
  }

}
