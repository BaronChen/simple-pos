import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { getItems } from '../reducers';
import { LoadItems } from '../actions/items.actions';

@Component({
  selector: 'app-console-container',
  templateUrl: './console-container.component.html',
  styleUrls: ['./console-container.component.css']
})
export class ConsoleContainerComponent implements OnInit {

  items$: Observable<IItem[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadItems());
    this.items$ = this.store.select(getItems);
  }

}
