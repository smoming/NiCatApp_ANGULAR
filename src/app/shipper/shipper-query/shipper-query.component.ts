import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShipperQuery } from '../shipper-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipper-query',
  templateUrl: './shipper-query.component.html',
  styleUrls: ['./shipper-query.component.css']
})
export class ShipperQueryComponent implements OnInit {

  @Output()
  queryEvent = new EventEmitter<ShipperQuery>();

  item: ShipperQuery;

  constructor() {
    const today = new Date();
    this.item = { StartDate: Extension.toDateStr(datefns.addDays(today, -7)), EndDate: Extension.toDateStr(today), Buyer: '' };
  }

  ngOnInit() {
  }

  doQuery(query: NgForm) {
    this.queryEvent.emit(query.value);
  }

}
