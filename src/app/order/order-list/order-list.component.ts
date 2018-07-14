import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Order) {
    this.selectEvent.emit(item);
  }

}
