import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeliveryType } from '../delivery-type';

@Component({
  selector: 'app-delivery-type-list',
  templateUrl: './delivery-type-list.component.html',
  styleUrls: ['./delivery-type-list.component.css']
})
export class DeliveryTypeListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<DeliveryType>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: DeliveryType) {
    this.selectEvent.emit(item);
  }

}
