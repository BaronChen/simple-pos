import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-console-container',
  templateUrl: './console-container.component.html',
  styleUrls: ['./console-container.component.css']
})
export class ConsoleContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
