import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { getItems, getBasketItemDetails, getTotal } from '../reducers';
import { LoadItems } from '../actions/items.actions';
import { AddOrUpdateItemInBasket, RemoveItemFromBasket } from '../actions/basket.actions';
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
  total$: Observable<number>;

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
    this.total$ = this.store.select(getTotal);
  }

  onAddItemToBasket(data: IBasketItem) {
    this.store.dispatch(new AddOrUpdateItemInBasket(data));
  }

  onRemoveItem(id: string) {
    this.store.dispatch(new RemoveItemFromBasket(id));
  }
}
