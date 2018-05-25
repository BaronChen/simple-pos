import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  @Input()
  public items: IItem[];

  constructor() { }

  ngOnInit() {
  }

}
