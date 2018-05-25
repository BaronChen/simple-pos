import { Component, OnInit, Input } from '@angular/core';
import { IBasketItemDetail } from '../../../models/basket-item';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input()
  basketItem: IBasketItemDetail;

  constructor() { }

  ngOnInit() {
  }

}
