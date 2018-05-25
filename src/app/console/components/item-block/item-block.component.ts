import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css']
})
export class ItemBlockComponent implements OnInit {

  @Input()
  item: IItem;

  constructor() { }

  ngOnInit() {
  }

}
