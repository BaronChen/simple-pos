import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { getItems, getBasketItemDetails } from '../reducers';
import { LoadItems } from '../actions/items.actions';
import { AddOrUpdateItemInBasket } from '../actions/basket.actions';
import { IBasketItem, IBasketItemDetail } from '../models/basket-item';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-console-container',
  templateUrl: './console-container.component.html',
  styleUrls: ['./console-container.component.css']
})
export class ConsoleContainerComponent implements OnInit {

  items$: Observable<IItem[]>;
  basketItems$: Observable<IBasketItemDetail[]>;

  isMobile: boolean;

  constructor(private store: Store<any>, public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadItems());
    this.items$ = this.store.select(getItems);
    this.basketItems$ = this.store.select(getBasketItemDetails);
  }

  onAddItemToBasket(data: IBasketItem) {
    this.store.dispatch(new AddOrUpdateItemInBasket(data));
  }

}
