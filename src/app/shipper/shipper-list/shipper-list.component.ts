import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipper } from '../shipper';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Shipper>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Shipper) {
    this.selectEvent.emit(item);
  }

}
