import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trading } from '../trading';

@Component({
  selector: 'app-trading-list',
  templateUrl: './trading-list.component.html',
  styleUrls: ['./trading-list.component.css']
})
export class TradingListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Trading>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Trading) {
    this.selectEvent.emit(item);
  }

}
