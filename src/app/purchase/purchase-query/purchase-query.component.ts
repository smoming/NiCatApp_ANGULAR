import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PurchaseQuery } from '../purchase-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';

@Component({
  selector: 'app-purchase-query',
  templateUrl: './purchase-query.component.html',
  styleUrls: ['./purchase-query.component.css']
})
export class PurchaseQueryComponent implements OnInit {

  @Output()
  queryEvent = new EventEmitter<PurchaseQuery>();

  item: PurchaseQuery;

  constructor() {
    const today = new Date();
    this.item = { StartDate: Extension.toDateStr(datefns.addDays(today, -7)), EndDate: Extension.toDateStr(today) };
  }

  ngOnInit() {
  }

  doQuery(query: NgForm) {
    this.queryEvent.emit(query.value);
  }

}
